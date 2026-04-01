<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calculator, Sun, DollarSign, Battery, Zap, ArrowRight } from 'lucide-react';

// const SolarSavingsCalculator = () => {
//     const [formData, setFormData] = useState({
//         monthlyBill: '',
//         roofSize: '',
//         sunlightHours: '',
//         location: '',
//         systemSize: ''
//     });

//     const [results, setResults] = useState(null);

//     const calculateSavings = (e) => {
//         e.preventDefault();

//         const monthlyBill = parseFloat(formData.monthlyBill) || 0;
//         const roofSize = parseFloat(formData.roofSize) || 0;
//         const sunlightHours = parseFloat(formData.sunlightHours) || 5;

//         // Calculation logic
//         const systemSize = roofSize * 0.15; // kW system based on roof size
//         const dailyProduction = systemSize * sunlightHours; // kWh per day
//         const monthlyProduction = dailyProduction * 30; // kWh per month
//         const costPerKwh = monthlyBill / 300; // Average consumption
//         const monthlySavings = monthlyProduction * costPerKwh;
//         const annualSavings = monthlySavings * 12;
//         const systemCost = systemSize * 2000; // $2000 per kW
//         const paybackPeriod = systemCost / annualSavings;
//         const twentyYearSavings = (annualSavings * 20) - systemCost;

//         setResults({
//             systemSize: systemSize.toFixed(2),
//             monthlySavings: monthlySavings.toFixed(2),
//             annualSavings: annualSavings.toFixed(2),
//             systemCost: systemCost.toFixed(2),
//             paybackPeriod: paybackPeriod.toFixed(1),
//             twentyYearSavings: twentyYearSavings.toFixed(2),
//             dailyProduction: dailyProduction.toFixed(2)
//         });
//     };

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-12"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <div className="flex items-center justify-center mb-4">
//                         <div className="bg-[#C9F31D] rounded-full p-3">
//                             <Calculator className="w-8 h-8 text-black" />
//                         </div>
//                     </div>
//                     <h1 className="text-4xl font-medium font-[Prompt] text-gray-900 mb-4">
//                         Solar Savings Calculator
//                     </h1>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         Discover how much you can save with solar energy. Get instant estimates for your home or business.
//                     </p>
//                 </motion.div>

//                 <div className="grid lg:grid-cols-2 gap-8">
//                     {/* Calculator Form */}
//                     <motion.div
//                         className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                             <Sun className="w-6 h-6 text-[#C9F31D]" />
//                             Enter Your Details
//                         </h2>

//                         <form onSubmit={calculateSavings} className="space-y-6">
//                             {/* Monthly Electricity Bill */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Monthly Electricity Bill ($)
//                                 </label>
//                                 <div className="relative">
//                                     <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                     <input
//                                         type="number"
//                                         name="monthlyBill"
//                                         value={formData.monthlyBill}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your monthly bill"
//                                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             {/* Roof Size */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Available Roof Area (sq ft)
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="roofSize"
//                                     value={formData.roofSize}
//                                     onChange={handleInputChange}
//                                     placeholder="Enter roof area"
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
//                                     required
//                                 />
//                             </div>

//                             {/* Sunlight Hours */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Average Daily Sunlight Hours
//                                 </label>
//                                 <select
//                                     name="sunlightHours"
//                                     value={formData.sunlightHours}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
//                                 >
//                                     <option value="3">3 hours (Low)</option>
//                                     <option value="4">4 hours (Medium)</option>
//                                     <option value="5" selected>5 hours (Good)</option>
//                                     <option value="6">6 hours (Excellent)</option>
//                                 </select>
//                             </div>

//                             {/* Location */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Your Location
//                                 </label>
//                                 <select
//                                     name="location"
//                                     value={formData.location}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
//                                 >
//                                     <option value="">Select your state</option>
//                                     <option value="ca">California</option>
//                                     <option value="tx">Texas</option>
//                                     <option value="fl">Florida</option>
//                                     <option value="ny">New York</option>
//                                     <option value="az">Arizona</option>
//                                 </select>
//                             </div>

//                             {/* Calculate Button */}
//                             <motion.button
//                                 type="submit"
//                                 className="w-full bg-[#C9F31D] text-black font-semibold py-4 px-6 rounded-lg hover:bg-[#b8e11a] transition-colors duration-200 flex items-center justify-center gap-2"
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                             >
//                                 <Calculator className="w-5 h-5" />
//                                 Calculate Savings
//                                 <ArrowRight className="w-5 h-5" />
//                             </motion.button>
//                         </form>
//                     </motion.div>

//                     {/* Results Section */}
//                     <motion.div
//                         className="space-y-6"
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                     >
//                         {results ? (
//                             <>
//                                 {/* Main Savings Card */}
//                                 <div className="bg-gradient-to-br from-[#C9F31D] to-[#b8e11a] rounded-2xl shadow-lg p-6 lg:p-8 text-center">
//                                     <h3 className="text-2xl font-bold text-black mb-4">
//                                         Your Solar Potential
//                                     </h3>
//                                     <div className="text-4xl font-bold text-black mb-2">
//                                         ${results.annualSavings}
//                                     </div>
//                                     <p className="text-black/80">Annual Savings</p>
//                                 </div>

//                                 {/* Results Grid */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     {/* System Size */}
//                                     <div className="bg-white rounded-xl shadow-md p-6">
//                                         <div className="flex items-center gap-3 mb-3">
//                                             <Zap className="w-6 h-6 text-[#C9F31D]" />
//                                             <h4 className="font-semibold text-gray-900">System Size</h4>
//                                         </div>
//                                         <p className="text-2xl font-bold text-gray-900">{results.systemSize} kW</p>
//                                         <p className="text-sm text-gray-600 mt-1">Recommended</p>
//                                     </div>

//                                     {/* System Cost */}
//                                     <div className="bg-white rounded-xl shadow-md p-6">
//                                         <div className="flex items-center gap-3 mb-3">
//                                             <DollarSign className="w-6 h-6 text-[#C9F31D]" />
//                                             <h4 className="font-semibold text-gray-900">System Cost</h4>
//                                         </div>
//                                         <p className="text-2xl font-bold text-gray-900">${results.systemCost}</p>
//                                         <p className="text-sm text-gray-600 mt-1">Before incentives</p>
//                                     </div>

//                                     {/* Payback Period */}
//                                     <div className="bg-white rounded-xl shadow-md p-6">
//                                         <div className="flex items-center gap-3 mb-3">
//                                             <Battery className="w-6 h-6 text-[#C9F31D]" />
//                                             <h4 className="font-semibold text-gray-900">Payback Period</h4>
//                                         </div>
//                                         <p className="text-2xl font-bold text-gray-900">{results.paybackPeriod} years</p>
//                                         <p className="text-sm text-gray-600 mt-1">Return on investment</p>
//                                     </div>

//                                     {/* 20-Year Savings */}
//                                     <div className="bg-white rounded-xl shadow-md p-6">
//                                         <div className="flex items-center gap-3 mb-3">
//                                             <Sun className="w-6 h-6 text-[#C9F31D]" />
//                                             <h4 className="font-semibold text-gray-900">20-Year Savings</h4>
//                                         </div>
//                                         <p className="text-2xl font-bold text-gray-900">${results.twentyYearSavings}</p>
//                                         <p className="text-sm text-gray-600 mt-1">Total savings</p>
//                                     </div>
//                                 </div>

//                                 {/* Additional Info */}
//                                 <div className="bg-white rounded-2xl shadow-lg p-6">
//                                     <h4 className="font-semibold text-gray-900 mb-4">Additional Information</h4>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//                                         <div>
//                                             <p className="text-gray-600">Daily Energy Production</p>
//                                             <p className="font-semibold text-gray-900">{results.dailyProduction} kWh</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">Monthly Savings</p>
//                                             <p className="font-semibold text-gray-900">${results.monthlySavings}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         ) : (
//                             /* Placeholder when no results */
//                             <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
//                                 <Sun className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                                     Calculate Your Savings
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Fill out the form to see how much you can save with solar energy.
//                                 </p>
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>

//                 {/* Disclaimer */}
//                 <motion.div
//                     className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.8 }}
//                 >
//                     <p>
//                         * These calculations are estimates based on average conditions. Actual savings may vary based on
//                         specific location, system efficiency, electricity rates, and available incentives.
//                         Consult with a solar professional for accurate quotes.
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default SolarSavingsCalculator;


>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sun, DollarSign, Battery, Zap, ArrowRight, IndianRupee } from "lucide-react";

const SolarSavingsCalculator = () => {
    const [formData, setFormData] = useState({
        electricityUsage: "",
        tariffRate: "",
        sunlightHours: "5",
        efficiencyFactor: "",
    });

    const [results, setResults] = useState(null);

    const calculateSavings = (e) => {
        e.preventDefault();

<<<<<<< HEAD
        const electricityUsage = parseFloat(formData.electricityUsage) || 0;
        const tariffRate = parseFloat(formData.tariffRate) || 0;
        const sunlightHours = parseFloat(formData.sunlightHours) || 5;
        const efficiencyFactor = parseFloat(formData.efficiencyFactor) || 0.8;
=======
        const electricityUsage = parseFloat(formData.electricityUsage) || 0; // kWh/month
        const tariffRate = parseFloat(formData.tariffRate) || 0; // ₹ per kWh
        const sunlightHours = parseFloat(formData.sunlightHours) || 5; // hours/day
        const efficiencyFactor = parseFloat(formData.efficiencyFactor) || 0.8; // system efficiency
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

        // System size in kW = (monthly usage / 30 days) / (sunlight hours * efficiency)
        const systemSize = (electricityUsage / 30) / (sunlightHours * efficiencyFactor);

        // Daily & Monthly Production
        const dailyProduction = systemSize * sunlightHours * efficiencyFactor;
        const monthlyProduction = dailyProduction * 30;

        // Cost and savings
        const monthlySavings = monthlyProduction * tariffRate;
        const annualSavings = monthlySavings * 12;
<<<<<<< HEAD
        const systemCost = systemSize * 60000;
=======
        const systemCost = systemSize * 60000; // ₹60,000 per kW (approx)
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        const paybackPeriod = systemCost / annualSavings;
        const twentyYearSavings = (annualSavings * 20) - systemCost;

        setResults({
            systemSize: systemSize.toFixed(2),
            monthlySavings: monthlySavings.toFixed(0),
            annualSavings: annualSavings.toFixed(0),
            systemCost: systemCost.toFixed(0),
            paybackPeriod: paybackPeriod.toFixed(1),
            twentyYearSavings: twentyYearSavings.toFixed(0),
            dailyProduction: dailyProduction.toFixed(2),
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center mb-4">
<<<<<<< HEAD
                        <div className=" bg-[#00C2FF]/30 rounded-full p-3">
=======
                        <div className="bg-[#C9F31D] rounded-full p-3">
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            <Calculator className="w-8 h-8 text-black" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-medium font-[Prompt] text-gray-900 mb-4">
                        Solar Savings Calculator
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[Prompt]">
                        Discover how much you can save with solar energy. Get instant estimates for your home or business.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-medium font-[Prompt] text-gray-900 mb-6 flex items-center gap-3">
                            <Sun className="w-6 h-6 text-[#C9F31D]" />
                            Enter Your Details
                        </h2>

                        <form onSubmit={calculateSavings} className="space-y-6">
                            {/* Electricity Usage */}
                            <div>
                                <label className="block text-sm font-medium font-[Prompt] text-gray-700 mb-2">
                                    Monthly Electricity Usage (kWh)
                                </label>
                                <input
                                    type="number"
                                    name="electricityUsage"
                                    value={formData.electricityUsage}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 500"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Tariff Rate */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Electricity Tariff Rate (₹ per kWh)
                                </label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="number"
                                        name="tariffRate"
                                        value={formData.tariffRate}
                                        onChange={handleInputChange}
                                        placeholder="e.g. 8"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Sunlight Hours */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Average Daily Sunlight Hours
                                </label>
                                <select
                                    name="sunlightHours"
                                    value={formData.sunlightHours}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
                                >
                                    <option value="3">3 hours (Low)</option>
                                    <option value="4">4 hours (Medium)</option>
                                    <option value="5">5 hours (Good)</option>
                                    <option value="6">6 hours (Excellent)</option>
                                </select>
                            </div>

                            {/* Efficiency Factor */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    System Efficiency Factor (0.7 - 0.9)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0.7"
                                    max="0.9"
                                    name="efficiencyFactor"
                                    value={formData.efficiencyFactor}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 0.8"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9F31D] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Calculate Button */}
                            <motion.button
                                type="submit"
<<<<<<< HEAD
                                className="w-full  bg-[#00C2FF]/30 text-black font-[Prompt] py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
=======
                                className="w-full bg-[#C9F31D] text-black font-[Prompt] py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Calculator className="w-5 h-5" />
                                Calculate Savings
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {results ? (
                            <>
                                <div className="bg-gradient-to-br from-[#C9F31D] to-[#b8e11a] rounded-2xl shadow-lg p-6 lg:p-8 text-center">
                                    <h3 className="text-2xl font-medium font-[Prompt] text-black mb-4">
                                        Your Solar Potential
                                    </h3>
                                    <div className="text-4xl font-medium font-[Prompt] text-black mb-2">
                                        ₹{results.annualSavings}
                                    </div>
                                    <p className="text-black/80 font-medium font-[Prompt]">Annual Savings</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl shadow-md p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Zap className="w-6 h-6 text-[#C9F31D]" />
                                            <h4 className="font-medium font-[Prompt] text-gray-900">System Size</h4>
                                        </div>
                                        <p className="text-2xl font-medium font-[Prompt] text-gray-900">
                                            {results.systemSize} kW
                                        </p>
                                        <p className="text-sm  text-gray-600 mt-1">Recommended</p>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <DollarSign className="w-6 h-6 text-[#C9F31D]" />
                                            <h4 className="font-medium font-[Prompt] text-gray-900">System Cost</h4>
                                        </div>
                                        <p className="text-2xl font-medium font-[Prompt] text-gray-900">
                                            ₹{results.systemCost}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">Approximate</p>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Battery className="w-6 h-6 text-[#C9F31D]" />
                                            <h4 className="font-medium font-[Prompt] text-gray-900">Payback Period</h4>
                                        </div>
                                        <p className="text-2xl font-medium font-[Prompt] text-gray-900">
                                            {results.paybackPeriod} years
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">ROI Period</p>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-md p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Sun className="w-6 h-6 text-[#C9F31D]" />
                                            <h4 className="font-medium font-[Prompt] text-gray-900">20-Year Savings</h4>
                                        </div>
                                        <p className="text-2xl font-medium font-[Prompt] text-gray-900">
                                            ₹{results.twentyYearSavings}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">Total savings</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h4 className="font-medium font-[Prompt] text-gray-900 mb-4">
                                        Additional Information
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Daily Energy Production</p>
                                            <p className="font-medium font-[Prompt] text-gray-900">
                                                {results.dailyProduction} kWh
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Monthly Savings</p>
                                            <p className="font-medium font-[Prompt] text-gray-900">
                                                ₹{results.monthlySavings}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                                <Sun className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Calculate Your Savings
                                </h3>
                                <p className="text-gray-600">
                                    Fill out the form to see how much you can save with solar energy.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p>
                        * These calculations are estimates based on average Indian conditions. Actual savings may vary depending on
                        your location, efficiency, and tariff rates.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SolarSavingsCalculator;
