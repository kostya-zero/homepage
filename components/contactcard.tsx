import Link from "next/link";

export default function ContactCard(props: any) {
    return (
        <>
            <Link href={props.link}>
                <div className="flex items-center justify-between m-4 p-[0.75rem] rounded-md text-sm bg-[#FFFFFF] border border-[#D9D9D9] scale-100 transition-all duration-200 hover:bg-[#F1F1F1] hover:border-[#565656] hover:scale-[1.03] dark:bg-[#2C2C2C] dark:border-[#494949] dark:hover:bg-[#464646] dark:hover:border-[#999999]">
                    <div className="flex items-center">
                        <p className="mr-2 font-bold">{props.name}</p>
                        <p>{props.contact}</p>
                    </div>
                    {props.icon}
                </div>
            </Link>
        </>
    );
}