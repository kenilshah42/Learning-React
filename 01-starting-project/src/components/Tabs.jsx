export default function Tabs({children, tabButton}){
    return (
        <>
            <menu>
               {tabButton}
            </menu>
            {children}
        </>
    );
}