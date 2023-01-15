import { model, Schema } from "mongoose";

export const User = model("user", new Schema({
    _id: {
        type: String,
        required: [true, "The username of email is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "The email of the user is required"]
    },
    password: {
        type: String,
        required: [true, "The password of the user is required"]
    },
    name: {
        type: String,
        required: false
    }
}))

export const Stock = model("stock", new Schema({
    _id: {
        type: String,
        required: [true, "The id of the stock is required"]
    },
    open: {
        type: Number,
        required: [true, "The opening stock of the company is required"],
    },
    close: {
        type: Number,
        required: [true, "The closing stock of the company is required"],
    },
    adjClose: {
        type: Number,
        required: [true, "The adjacent closing stock of the company is required"],
    },
    high: {
        type: Number,
        required: [true, "The highest price of stock of the company is required"],
    },
    low: {
        type: Number,
        required: [true, "The lowest price of stock of the company is required"],
    },
    volume: {
        type: Number,
        required: [true, "The volume of stock of the company is required"],
    },
    date: {
        type: Date,
        required: [true, "The date of the stock update is required"]
    },
    company: {
        type: String,
        required: [true, "The company id of the stock is required"]
    }
}))

export const Session = model("session", new Schema({
    _id: {
        type: String,
        required: [true, "The user id for the session is required"]
    },
    token: {
        type: String,
        required: [true, "The token of the session is required"]
    },
    expire: {
        type: Number,
        required: [true, "The token expire time is required"],
    }
}))