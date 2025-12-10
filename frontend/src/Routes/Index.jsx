import React from 'react'
import Login from "../Components/Login.jsx"
import Register from '../Components/Register.jsx'
import {Routes, Route} from "react-router"
import LandingPage from '../Components/LandingPage.jsx'
import GoogleCallback from '../handler/callback.handler.jsx'

// Navbar Pages

import FarmingChapters from '../Components/Farming_chapter.jsx';
import About from '../Components/About.jsx';
import Fertilizers from '../Components/Fertilizers.jsx';
import Soil from '../Components/Soil.jsx';
import MarketGrowingBusiness from '../Components/MarketGrowingBusiness.jsx';
import ToolsAndMachinery from '../Components/ToolMachinary.jsx';

// Farming Technique

import OrganicFarming from '../Components/FarmingTechnique/OrganicFarming.jsx'
import Aeroponics from '../Components/FarmingTechnique/Aeroponics.jsx'
import Agroforestry from '../Components/FarmingTechnique/Agroforestry.jsx'
import Aquaponics from '../Components/FarmingTechnique/Aquaponics.jsx'
import CommercialFarming from '../Components/FarmingTechnique/CommercialFarming.jsx'
import DrylandFarming from '../Components/FarmingTechnique/DrylandFarming.jsx'
import ExtensiveFarming from '../Components/FarmingTechnique/ExtensiveFarming.jsx'
import Hydroponics from '../Components/FarmingTechnique/Hydroponics.jsx'
import IntensiveFarming from '../Components/FarmingTechnique/IntensiveFarming.jsx'
import MixedFarming from '../Components/FarmingTechnique/MixedFarming.jsx'
import PastoralFarming from '../Components/FarmingTechnique/PastoralFarming.jsx'
import Permaculture from '../Components/FarmingTechnique/Permaculture.jsx'
import PlantationFarming from '../Components/FarmingTechnique/PlantationFarming.jsx'
import PrecisionFarming from '../Components/FarmingTechnique/PrecisionFarming.jsx'
import ShiftingCultivation from '../Components/FarmingTechnique/ShiftingCultivation.jsx'
import SubsistenceFarming from '../Components/FarmingTechnique/SubsistenceFarming.jsx'
import UrbanAgriculture from '../Components/FarmingTechnique/UrbanAgriculture.jsx'
import VerticalFarming from '../Components/FarmingTechnique/VerticalFarming.jsx'

// Pest & Disease Management

import BioPesticides from '../Components/Pest_Disease_Management/BioPesticides.jsx'
import ChemicalPesticides from '../Components/Pest_Disease_Management/ChemicalPesticides.jsx'
import IPMGuide from '../Components/Pest_Disease_Management/IPMGuide.jsx'

// Soil

import FertilizersChemical from '../Components/Soil/FertilizersChemical.jsx'
import FertilizersOrganic from '../Components/Soil/FertilizersOrganic.jsx'
import SoilAmendments from '../Components/Soil/SoilAmendments.jsx'
import SoilTesting from '../Components/Soil/SoilTesting.jsx'
import SoilType from '../Components/Soil/SoilType.jsx'

// Tools and Machinery

import HarvestingTools from '../Components/Tools_Machinery/HarvestingTools.jsx'
import IrrigationEquipment from '../Components/Tools_Machinery/IrrigationEquipment.jsx'
import SoilPreparationTools from '../Components/Tools_Machinery/SoilPreparationTools.jsx'

// Irrigation

import DripSprinklerGuide from '../Components/Irrigation/DripSprinklerGuide.jsx'
import IrrigationMethods from '../Components/Irrigation/IrrigationMethods.jsx'
import WaterHarvesting from '../Components/Irrigation/WaterHarvesting.jsx'

// Crops and Guides

import CashCrops from '../Components/Crops_Guides/CashCrops.jsx'
import Grains from '../Components/Crops_Guides/Grains.jsx'
import VegetablesFruits from '../Components/Crops_Guides/VegetablesFruits.jsx'
import Pulses from '../Components/Crops_Guides/Pulses.jsx'



function Index() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/google/callback" element={<GoogleCallback />} />

        {/* Navbar Pages */}
        <Route path="/nav/farming_chapter" element={<FarmingChapters/>}></Route>
        <Route path="/nav/about" element={<About/>}></Route>
        <Route path="/nav/Tools&machinery" element={<ToolsAndMachinery/>}></Route>
        <Route path="/nav/soil" element={<Soil/>}></Route>
        <Route path="/nav/market&growingbusiness" element={<MarketGrowingBusiness/>}></Route>
        <Route path="/nav/fertilizer" element={<Fertilizers/>}></Route>


        {/* Farming Technique Routes */}
        <Route path="/farming_technique/organic-farming" element={<OrganicFarming/>}></Route>
        <Route path="/farming_technique/subsistence-farming" element={<SubsistenceFarming/>}></Route>
        <Route path="/farming_technique/aquaponics" element={<Aquaponics/>}></Route>
        <Route path="/farming_technique/vertical-farming" element={<VerticalFarming/>}></Route>
        <Route path="/farming_technique/commercial-farming" element={<CommercialFarming/>}></Route>
        <Route path="/farming_technique/agroforestry" element={<Agroforestry/>}></Route>
        <Route path="/farming_technique/dryland-farming" element={<DrylandFarming/>}></Route>
        <Route path="/farming_technique/precision-farming" element={<PrecisionFarming/>}></Route>
        <Route path="/farming_technique/hydroponics" element={<Hydroponics/>}></Route>
        <Route path="/farming_technique/mixed-farming" element={<MixedFarming/>}></Route>
        <Route path="/farming_technique/plantation-farming" element={<PlantationFarming/>}></Route>
        <Route path="/farming_technique/permaculture" element={<Permaculture/>}></Route>
        <Route path="/farming_technique/shifting-cultivation" element={<ShiftingCultivation/>}></Route>
        <Route path="/farming_technique/urban-agriculture" element={<UrbanAgriculture/>}></Route>
        <Route path="/farming_technique/extensive-farming" element={<ExtensiveFarming/>}></Route>
        <Route path="/farming_technique/pastoral-farming" element={<PastoralFarming/>}></Route>
        <Route path="/farming_technique/aeroponics" element={<Aeroponics/>}></Route>
        <Route path="/farming_technique/intensive-farming" element={<IntensiveFarming/>}></Route>


        {/* Pest & Disease Management Routes */}
        <Route path="/pest_disease_management/bio-pesticides" element={<BioPesticides/>}></Route>
        <Route path="/pest_disease_management/chemical-pesticides" element={<ChemicalPesticides/>}></Route>
        <Route path="/pest_disease_management/ipm-guide" element={<IPMGuide/>}></Route>

        {/* Tools & Machinery Routes */}
        <Route path="/tools_machinery/harvesting-tools" element={<HarvestingTools/>}></Route>
        <Route path="/tools_machinery/irrigation-equipment" element={<IrrigationEquipment/>}></Route>
        <Route path="/tools_machinery/soil-tools" element={<SoilPreparationTools/>}></Route>

        {/* Soil Routes */} 
        <Route path="/soil/fertilizers-chemical" element={<FertilizersChemical/>}></Route>
        <Route path="/soil/fertilizers-organic" element={<FertilizersOrganic/>}></Route>
        <Route path="/soil/soil-amendments" element={<SoilAmendments/>}></Route>
        <Route path="/soil/soil-testing" element={<SoilTesting/>}></Route>
        <Route path="/soil/soil-type" element={<SoilType/>}></Route>

        {/* Irrigation Routes */}
        <Route path="/Irrigation/drip-sprinkler-guide" element={<DripSprinklerGuide/>}></Route>
        <Route path="/Irrigation/irrigation-methods" element={<IrrigationMethods/>}></Route>
        <Route path="/Irrigation/water-harvesting" element={<WaterHarvesting/>}></Route>

        {/* Crops & Guides Routes */}
        <Route path="/crops_guides/cash-crops" element={<CashCrops/>}></Route>
        <Route path="/crops_guides/grains" element={<Grains/>}></Route>
        <Route path="/crops_guides/vegetables-fruits" element={<VegetablesFruits/>}></Route>
        <Route path="/crops_guides/pulses" element={<Pulses/>}></Route>

      </Routes>
    </div>
  )
}

export default Index
