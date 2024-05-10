export default function Tabs({children, tabButton, ButtonsContainer = 'menu'}){
    return (
        <>
            <ButtonsContainer>
               {tabButton}
            </ButtonsContainer>
            {children}
        </>
    );
}