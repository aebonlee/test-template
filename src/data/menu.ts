
import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    QuestionMarkCircleIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/solid'

export interface Product {
    name: string;
    description: string;
    href: string;
    icon: any;
}

export const product_footer = [
    { name: '개인정보처리방침', href: '#' },
    { name: '이용약관', href: '#' },
]

export const product_introducton: Array<Product> = [
    { name: '시험소개', description: '', href: '/introduce', icon: ChartPieIcon },
    { name: '시험일정', description: '', href: '/exam-schedule', icon: CursorArrowRaysIcon },
    { name: '시험출제기준', description: '', href: '/exam-creiteria', icon: FingerPrintIcon },
    { name: '수강신청', description: '', href: '/registration', icon: SquaresPlusIcon },
]

export const product_vod: Array<Product> = [
    { name: '경영정보 일반', description: '', href: '/online-classroom', icon: ChartPieIcon },
    { name: '데이터 해석 및 활용', description: '', href: '/online-classroom', icon: CursorArrowRaysIcon },
    { name: '경영정보 시각화 디자인', description: '', href: '/online-classroom', icon: FingerPrintIcon },
]

export const product_pdf: Array<Product> = [
    { name: '경영정보 일반', description: '', href: '/online-learning-lab', icon: ChartPieIcon },
    { name: '데이터 해석 및 활용', description: '', href: '/online-learning-lab', icon: CursorArrowRaysIcon },
    { name: '경영정보 시각화 디자인', description: '', href: '/online-learning-lab', icon: FingerPrintIcon },
]

export const product_service: Array<Product> = [
    { name: '공지사항', description: '', href: '/notice', icon: ChartPieIcon },
    { name: '게시판', description: '', href: '/board', icon: CursorArrowRaysIcon },
    { name: '갤러리', description: '', href: '/gallery', icon: FingerPrintIcon },
    { name: 'Q&A', description: '', href: '/qna', icon: QuestionMarkCircleIcon },
    { name: 'FAQ', description: '', href: '/faq', icon: QuestionMarkCircleIcon },
    { name: '자료실', description: '', href: '/archive', icon: DocumentTextIcon },
]

export const product_my_course: Array<Product> = [
    { name: '필기모의시험', description: '', href: '/exam', icon: SquaresPlusIcon },
    { name: '모의시험 성적', description: '', href: '/exam-result', icon: SquaresPlusIcon },
    { name: '학습기록 확인', description: '', href: '/my-course', icon: SquaresPlusIcon },
]