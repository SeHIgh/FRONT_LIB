import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

const Tab_li = styled.button`
    ${tw`mr-2.5`}
    :last-child{
        ${tw`mr-0`}
    }
    &:hover {
        ${tw`text-red-500`}
    }
`;

export default function Header() {
    return (
        <header className="sticky top-0 p-2.5 backdrop-blur-sm ">
            {/* 
            타이틀을 눌렀을때 상호작용은 타이틀 부위만 작동 해야하기 때문
            h1 > Link
            */}
            <h1 className="text-center">
                <Link href="/">Next Front Library</Link>
            </h1>
            <nav aria-label="Tabs">
                <ul className="flex flex-row justify-center">
                    <Tab_li className="mr-2.5">
                        <Link href="/">홈</Link>
                    </Tab_li>
                    <Tab_li className="mr-2.5">
                        <Link href="/about">소개</Link>
                    </Tab_li>
                    <Tab_li>
                        <Link href="/contact">연락처</Link>
                    </Tab_li>
                </ul>
            </nav>
        </header>
    );
}
