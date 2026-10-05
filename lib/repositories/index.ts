import FileDriver from "@/lib/db/FileDriver";
import { ReviewRepository } from "./Review";

export const reviewRepository = new ReviewRepository(new FileDriver());