import {IllustrationImage} from "./illustration-image";

export class Illustration {
    id: number;
    location: string; //top or bottom
    header: string;
    images: IllustrationImage[];
}
