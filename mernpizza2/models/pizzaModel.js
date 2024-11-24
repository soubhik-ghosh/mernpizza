const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        varients: { type: [String], required: true }, // Assuming varients is an array of strings
        prices: { type: [Number], required: true },  // Assuming prices is an array of numbers
        category: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true, // Fixing the typo from "timestamp" to "timestamps"
    }
);

const PizzaModel = mongoose.model("Pizza", pizzaSchema);

module.exports = PizzaModel; // Fixing the typo from "module.pizzaModule" to "module.exports"
