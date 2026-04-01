import React, { useState } from "react";

const data = {
    India: {
        Maharashtra: {
            Pune: {
                Haveli: ["Wagholi", "Hadapsar", "Kothrud", "Kharadi", "Lohegaon"],
                Mulshi: ["Paud", "Pirangut", "Lavasa", "Bhugaon", "Tamhini"],
                Baramati: ["Malegaon", "Someshwar", "Bhigwan", "Morgaon", "Nira"],
                Junnar: ["Narayangaon", "Otur", "Manchar", "Alephata", "Vadgaon"],
                Daund: ["Patas", "Kedgaon", "Yavat", "Kurkumbh", "Rui"],
            },
            Mumbai: {
                MumbaiCity: ["Andheri", "Bandra", "Dadar", "Kurla", "Goregaon"],
                Thane: ["Vashi", "Nerul", "Belapur", "Kalyan", "Bhiwandi"],
                Borivali: ["Dahisar", "Kandivali", "Malad", "Jogeshwari", "Goregaon"],
                Dadar: ["Matunga", "Mahim", "Prabhadevi", "Worli", "Parel"],
                Chembur: ["Deonar", "Govandi", "TilakNagar", "Mankhurd", "RCF"],
            },


            Sambhajinagar: {
                City: ["Cidco", "Nirala Bazar", "Garkheda", "Osmanpura", "Beed Bypass"],
                Gangapur: ["Lasur", "Waluj", "Bhivpur", "Deogaon", "Nakshatrawadi"],
                Vaijapur: ["Vaijapur Town", "Nandgaon", "Shendra", "Daultabad", "Karmad"],
                Kannad: ["Kannad City", "Khuldabad", "Sawangi", "Ellora", "Bidkin"],
                Sillod: ["Sillod Town", "Bhokardan", "Chitegaon", "Rajur", "Banoti"],
            },
        },

        TamilNadu: {
            Chennai: {
                Central: ["T Nagar", "Kodambakkam", "Mylapore"],
                South: ["Velachery", "Adyar", "Thiruvanmiyur"],
                North: ["Washermenpet", "Royapuram", "Perambur"],
            },
            Madurai: {
                East: ["Anna Nagar", "Thiruparankundram", "Melur"],
                West: ["Palanganatham", "Koodal Nagar", "Aarapalayam"],
                South: ["Tallakulam", "Villapuram", "Anuppanadi"],
            },
            Coimbatore: {
                North: ["RS Puram", "Saibaba Colony", "Gandhipuram"],
                South: ["Singanallur", "Peelamedu", "Sundarapuram"],
                Central: ["Townhall", "Ukkadam", "Gopalapuram"],
            },
        },

        Gujarat: {
            Ahmedabad: {
                North: ["Navrangpura", "Naranpura", "Gota"],
                South: ["Maninagar", "Vatva", "Kankaria"],
                West: ["Vastrapur", "Satellite", "Thaltej"],
            },
            Surat: {
                North: ["Varachha", "Amroli", "Katargam"],
                South: ["Udhna", "Parvat", "Pandesara"],
                West: ["Adajan", "Pal", "Rander"],
            },
            Vadodara: {
                Central: ["Raopura", "Sayajigunj", "Akota"],
                East: ["Manjalpur", "Makarpura", "Tarsali"],
                West: ["Gotri", "Alkapuri", "Subhanpura"],
            },
        },

        Haryana: {
            Gurugram: {
                Sector10: ["A", "B", "C"],
                Sector20: ["D", "E", "F"],
                Sector30: ["G", "H", "I"],
            },
            Faridabad: {
                Sector5: ["J", "K", "L"],
                Sector15: ["M", "N", "O"],
                Sector25: ["P", "Q", "R"],
            },
            Sonipat: {
                Sector40: ["S", "T", "U"],
                Sector50: ["V", "W", "X"],
                Sector60: ["Y", "Z", "AA"],
            },
        },

        Karnataka: {
            Bengaluru: {
                East: ["Indiranagar", "Whitefield", "KR Puram"],
                West: ["Rajajinagar", "Basaveshwar", "Kengeri"],
                South: ["JP Nagar", "BTM", "Banashankari"],
            },
            Mysuru: {
                North: ["Kuvempunagar", "Vijayanagar", "Jayalakshmipuram"],
                South: ["Saraswathipuram", "Chamundi Hill", "Hebbal"],
                East: ["Nazarbad", "Lashkar", "Krishnamurthypuram"],
            },
            Hubballi: {
                Central: ["Deshpande Nagar", "Vidya Nagar", "Old Hubli"],
                East: ["Gokul Road", "Gabbur", "Nehru Nagar"],
                West: ["Unkal", "Keshwapur", "Kamaripeth"],
            },
        },
    },
    USA: {
        California: {
            LosAngeles: {
                Downtown: ["Echo Park", "Hollywood", "Silver Lake", "Burbank", "Pasadena"],
                Westside: ["Santa Monica", "Venice", "Brentwood", "Beverly Hills", "Westwood"],
                Valley: ["Northridge", "Encino", "Sherman Oaks", "Tarzana", "Reseda"],
            },
            SanFrancisco: {
                Central: ["SoMa", "Mission District", "Castro", "Noe Valley", "Twin Peaks"],
                South: ["Daly City", "San Bruno", "Colma", "Pacifica", "South SF"],
                North: ["Marina", "Nob Hill", "Chinatown", "North Beach", "Telegraph Hill"],
            },
        },
        Texas: {
            Dallas: {
                Central: ["Downtown", "Deep Ellum", "Uptown", "Cedars", "Design District"],
                North: ["Plano", "Frisco", "Addison", "Carrollton", "Irving"],
                South: ["Oak Cliff", "Lancaster", "DeSoto", "Cedar Hill", "Red Oak"],
            },
            Houston: {
                Central: ["Midtown", "Montrose", "Downtown", "Museum District", "Heights"],
                North: ["Aldine", "Spring", "Greenspoint", "Woodlands", "Humble"],
                West: ["Katy", "Energy Corridor", "Sugar Land", "Alief", "Bellaire"],
            },
        },
    },
};

const generateCustomers = (village) => [
    {
        name: `${village} Solar User 1`,
        mobile: "9876543210",
        address: `${village}, ${village} Road, Maharashtra`,
        lat: 19.8762,
        lng: 75.3433,
        solarInfo: {
            capacity: "5 kW",
            battery: "Lithium-ion 6.5 kWh",
            inverter: "Sungrow SG5K-D",
            installationDate: "12 May 2023",
            status: "Running Smoothly",
            production: "21.3 kWh/day",
        },
    },
    {
        name: `${village} Solar User 2`,
        mobile: "9823456789",
        address: `${village} Main Street, Near School, Maharashtra`,
        lat: 29.0588,
        lng: 76.0856,
        solarInfo: {
            capacity: "3 kW",
            battery: "Lead Acid 4.2 kWh",
            inverter: "Growatt 3000TL",
            installationDate: "8 Jan 2024",
            status: "Battery Maintenance Required",
            production: "13.8 kWh/day",
        },
    },
    {
        name: `${village} Solar User 3`,
        mobile: "9012345678",
        address: `${village} Chowk, Opp. Mandir, Maharashtra`,
        lat: 11.1271,
        lng: 78.6569,
        solarInfo: {
            capacity: "7.5 kW",
            battery: "Lithium-ion 10 kWh",
            inverter: "Luminous NXG 1800",
            installationDate: "2 Aug 2022",
            status: "Excellent Performance",
            production: "28.7 kWh/day",
        },
    },
];

export default function LocationSelector() {
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const openMap = (cust) => {
        window.open(`https://www.google.com/maps?q=${cust.lat},${cust.lng}`, "_blank");
    };

    const resetBelow = (level) => {
        if (level === "country") {
            setState(""); setDistrict(""); setTaluka(""); setVillage("");
        } else if (level === "state") {
            setDistrict(""); setTaluka(""); setVillage("");
        } else if (level === "district") {
            setTaluka(""); setVillage("");
        } else if (level === "taluka") {
            setVillage("");
        }
        setSelectedCustomer(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 relative z-10">
            <h1 className="text-3xl font-bold text-black mb-6">
                ☀️ Solar Customer Locator
            </h1>

            {/* Country */}
            <select
                value={country}
                onChange={(e) => { setCountry(e.target.value); resetBelow("country"); }}
                className="w-full p-3 rounded-lg mb-4 bg-white border border-gray-300"
            >
                <option value="">Select Country</option>
                {Object.keys(data).map((c) => <option key={c}>{c}</option>)}
            </select>

            {/* State */}
            {country && (
                <select
                    value={state}
                    onChange={(e) => { setState(e.target.value); resetBelow("state"); }}
                    className="w-full p-3 rounded-lg mb-4 bg-white border border-gray-300"
                >
                    <option value="">Select State</option>
                    {Object.keys(data[country]).map((s) => <option key={s}>{s}</option>)}
                </select>
            )}

            {/* District */}
            {state && (
                <select
                    value={district}
                    onChange={(e) => { setDistrict(e.target.value); resetBelow("district"); }}
                    className="w-full p-3 rounded-lg mb-4 bg-white border border-gray-300"
                >
                    <option value="">Select District</option>
                    {Object.keys(data[country][state]).map((d) => <option key={d}>{d}</option>)}
                </select>
            )}

            {/* Taluka */}
            {district && (
                <select
                    value={taluka}
                    onChange={(e) => { setTaluka(e.target.value); resetBelow("taluka"); }}
                    className="w-full p-3 rounded-lg mb-4 bg-white border border-gray-300"
                >
                    <option value="">Select Taluka</option>
                    {Object.keys(data[country][state][district]).map((t) => <option key={t}>{t}</option>)}
                </select>
            )}

            {/* Village */}
            {taluka && (
                <select
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full p-3 rounded-lg mb-6 bg-white border border-gray-300"
                >
                    <option value="">Select Village</option>
                    {data[country][state][district][taluka].map((v) => <option key={v}>{v}</option>)}
                </select>
            )}

            {/* Customers */}
            {village && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        Solar Customers in {village}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {generateCustomers(village).map((cust, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedCustomer(cust)}
                                className="cursor-pointer bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
                            >
                                <p className="text-lg font-semibold text-gray-800">{cust.name}</p>
                                <p className="text-sm text-gray-600">📞 {cust.mobile}</p>
                                <p className="text-sm text-gray-500">🏠 {cust.address}</p>
                                <p className="text-blue-600 mt-1">📍 Tap to view Solar Info</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Modal */}
            {selectedCustomer && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-96 p-6 relative">
                        <button
                            onClick={() => setSelectedCustomer(null)}
                            className="absolute top-2 right-3 text-gray-500 text-xl hover:text-red-500"
                        >
                            ✕
                        </button>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            {selectedCustomer.name}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p><b>📞 Mobile:</b> {selectedCustomer.mobile}</p>
                            <p><b>🏠 Address:</b> {selectedCustomer.address}</p>
                            <p><b>🔋 Capacity:</b> {selectedCustomer.solarInfo.capacity}</p>
                            <p><b>⚡ Battery:</b> {selectedCustomer.solarInfo.battery}</p>
                            <p><b>🔧 Inverter:</b> {selectedCustomer.solarInfo.inverter}</p>
                            <p><b>📅 Installed On:</b> {selectedCustomer.solarInfo.installationDate}</p>
                            <p><b>📈 Production:</b> {selectedCustomer.solarInfo.production}</p>
                            <p><b>🟢 Status:</b> {selectedCustomer.solarInfo.status}</p>
                        </div>

                        <button
                            onClick={() => openMap(selectedCustomer)}
                            className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                        >
                            Open in Google Maps
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}