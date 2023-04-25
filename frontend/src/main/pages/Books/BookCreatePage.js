import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useNavigate } from 'react-router-dom';


const BookCreatePage = () => {
    let navigate = useNavigate();

    const onFormSubmit = async (formData) => {
        console.log("form submit function is called.");
        navigate("/books");
    }

    return (
        <BasicLayout>
            <div className="pt-2">
                <h1>Create New Book</h1>
            </div>
        </BasicLayout>
    )
}

export default BookCreatePage;