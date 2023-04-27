import React from 'react';
import EnergyDrinkForm from "main/components/EnergyDrinks/EnergyDrinkForm"
import { energydrinkFixtures } from 'fixtures/energydrinkFixtures';

export default {
    title: 'components/Energy Drinks/EnergyDrinkForm',
    component: EnergyDrinkForm
};

const Template = (args) => {
    return (
        <EnergyDrinkForm {...args} />
    )
};

export const Default = Template.bind({});

Default.args = {
    submitText: "Create",
    submitAction: () => { console.log("Submit was clicked"); }
};

export const Show = Template.bind({});

Show.args = {
    initialContents: energydrinkFixtures.oneEnergyDrink[0],
    buttonLabel: "Update",
    submitAction:  () => {console.log("Submit was clicked");}
};