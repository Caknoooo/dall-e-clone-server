import express from "express";
import * as dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";

dotenv.config();

const router = express.Router();