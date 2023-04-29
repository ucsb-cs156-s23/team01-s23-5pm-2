import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import MovieEditPage from "main/pages/Movies/MovieEditPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import mockConsole from "jest-mock-console";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 3
    }),
    useNavigate: () => mockNavigate
}));

const mockUpdate = jest.fn();
jest.mock('main/utils/movieUtils', () => {
    return {
        __esModule: true,
        movieUtils: {
            update: (_movie) => {return mockUpdate();},
            getById: (_id) => {
                return {
                    movie: {
                        id: 3,
                        name: "Beauty and the Beast",
                        director: "Bill Condon"
                    }
                }
            }
        }
    }
});


describe("MovieEditPage tests", () => {

    const queryClient = new QueryClient();

    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <MovieEditPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

    test("loads the correct fields", async () => {

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <MovieEditPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.getByTestId("MovieForm-name")).toBeInTheDocument();
        expect(screen.getByDisplayValue('Beauty and the Beast')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Bill Condon')).toBeInTheDocument();
    });

    test("redirects to /movies on submit", async () => {

        const restoreConsole = mockConsole();

        mockUpdate.mockReturnValue({
            "movie": {
                id: 3,
                name: "Beauty and the Beast",
                releasedate: "March 2, 2017",
                director: "Bill Condon"
            }
        });

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <MovieEditPage />
                </MemoryRouter>
            </QueryClientProvider>
        )

        const nameInput = screen.getByLabelText("Name");
        expect(nameInput).toBeInTheDocument();

        const releasedateInput = screen.getByLabelText("Release Date");
        expect(releasedateInput).toBeInTheDocument();

        const directorInput = screen.getByLabelText("Director");
        expect(directorInput).toBeInTheDocument();

        const updateButton = screen.getByText("Update");
        expect(updateButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.change(nameInput, { target: { value: 'Beauty and the Beast' } })
            fireEvent.change(releasedateInput, { target: { value: 'March 2, 2017' } })
            fireEvent.change(directorInput, { target: { value: 'Bill Condon' } })
            fireEvent.click(updateButton);
        });

        await waitFor(() => expect(mockUpdate).toHaveBeenCalled());
        await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/movies"));

        // assert - check that the console.log was called with the expected message
        expect(console.log).toHaveBeenCalled();
        const message = console.log.mock.calls[0][0];
        const expectedMessage =  `updatedMovie: {"movie":{"id":3,"name":"Beauty and the Beast","releasedate":"March 2, 2017","director":"Bill Condon"}`

        expect(message).toMatch(expectedMessage);
        restoreConsole();

    });

});