import styles from "./Section.module.css";

const Section = ({children, bgcolor="transparent", color="black", size}) => {

    console.log(size);

    let padding;

    switch(size) {
        case 'large':
            padding = '6rem 3rem';
            break;
        case 'xl':
            padding = '9rem 3rem';
            break;
        default:
            padding = '3rem';
            break;
    }


    return(
        <section className={`${styles.section}`} style={{ backgroundColor: bgcolor, color: color, padding: padding }}>
            {children}
        </section>
    )
}

export default Section;