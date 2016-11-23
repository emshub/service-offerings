import {Illustration} from "./illustration";
import {ToolTip} from "./tooltip";

export class Page {
    id: number; 
    title: string;
    description: string;
    illustrations: Illustration[];
    tooltips: ToolTip[];
}
