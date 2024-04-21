import { createContext } from "react";
import { InfoContextType } from "../../types/typeContext";

const InfoContext = createContext<InfoContextType | null>(null);

export default InfoContext;
