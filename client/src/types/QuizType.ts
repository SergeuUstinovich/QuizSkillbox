export interface QuizType {
    id: number;
    page5: Page5Type;
    page6: Page6Type;
    page8: Page8Type;
    page11: Page11Type;
    page13: PageList1_2_4_13_15Type;
    page14: Page14Type;
    page15: PageList1_2_4_13_15Type;
    page16: Page16Type;
    page22: Page22Type;
    name: string;
    direction: string;
    url_link: string;
}

interface ImageProps {
    id: number;
    image_url: string;
}

export interface Page5Type {
    id: number;
    course_name: string;
    title: string;
    price1: number;
    price2: number;
    price3: number;
}

export interface Page6Type {
    id: number;
    course_name: string;
    title: string;
    text: string;
}

export interface Page8Type {
    id: number;
    cards: Page8ListType[];
    course_name: string;
    title: string;
}

export interface Page8ListType {
    id: number;
    image: ImageProps;
    course_name: string;
    description: string;
    old_job: string;
    new_job: string;
}

export interface Page11Type {
    id: number;
    collect_image: ImageProps[];
    course_name: string;
    title: string;
    head: string;
}

export interface PageList1_2_4_13_15Type {
  id: number;
  cards: PageListType[];
  course_name: string;
  title: string;
}

export interface PageListType {
    id: number;
    image: ImageProps;
    course_name: string;
    description: string;
}

export interface Page14Type {
    id: number;
    cards: PageListType[];
    course_name: string;
    title: string;
}

export interface PageList1_2_13_15Type {
  id: number;
  cards: PageListType;
  course_name: string;
  title: string;
}

export interface Page16Type {
    id: number;
    cards: Page16ListType[];
    course_name: string;
    title: string;
    head: string;
}

export interface Page16ListType {
    id: number;
    image: ImageProps;
    course_name: string;
    description: string;
    title: string;
}

export interface Page22Type {
    id: number;
    course_name: string;
    title: string;
    full_price: number;
    discount: number;
    month: number;
}