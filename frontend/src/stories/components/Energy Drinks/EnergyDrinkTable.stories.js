import React from 'react';
import EnergyDrinkTable from 'main/components/Energy Drinks/EnergyDrinkTable';
import { energydrinkFixtures } from 'fixtures/energydrinkFixtures';

export default {
    title: 'components/Energy Drinks/EnergyDrinkTable',
    component: EnergyDrinkTable
};

const Template = (args) => {
    return (
        <EnergyDrinkTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    energydrinks: []
};

export const ThreeSubjectsNoButtons = Template.bind({});

ThreeSubjectsNoButtons.args = {
    energydrinks: energydrinkFixtures.threeEnergyDrinks,
    showButtons: false
};

export const ThreeSubjectsWithButtons = Template.bind({});
ThreeSubjectsWithButtons.args = {
    energydrinks: energydrinkFixtures.threeEnergyDrinks,
    showButtons: true
};
