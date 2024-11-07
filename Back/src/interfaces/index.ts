export interface Course {
    id : number;
    title : string;
    description : string;
    modules : Module[]
}

export interface Module {
    id: number;
    courseId: number;
    title : string;
    lessons : Lesson[];
}

export interface Lesson {
    id: number,
    moduleId: number,
    title : string;
    description : string;
    topics : string[];
    content : Content[]
}

export interface Content {
    type : 'text' | 'video' | 'audio' | 'podcast';
    data : string;
}






