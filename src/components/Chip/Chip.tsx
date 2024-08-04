import styles from './Chip.module.css';


export enum ChipVariantEnum {
    interior
}

export interface ChipProps {
    chipVariant: ChipVariantEnum
}


const InteriorChip = () => {

    return (
        <div className={styles.interiorChipContainer}>
            <span className={styles.interiorChipText}>
                Interior
            </span>
        </div>
    )

}

const Chip = ({chipVariant}: ChipProps) => {

    


    return ( 
    <>
        {chipVariant === ChipVariantEnum.interior && (<InteriorChip />)}
    </>
    )

}

export default Chip