import Image from 'next/image'
import ladyImage from '../assets/2.jpeg';


const Slides = [
    {
        id: 1,
        image: ladyImage,
    },
    {
        id: 2,
        image: ladyImage,
    },
    {
        id: 3,
        image: ladyImage,
    }
]


export default function Slider({ styles }) {


    return (
        <div class={styles.slideBox}>
            <div class={styles.slideimages}>
                {Slides.map((item, index) => (
                    <div onClick={()=>item.id = 2} class={styles.items}>
                        {item.id == 2 ? (
                            <Image class={styles.slidesi} src={item.image} alt="slide1" layout='responsive' />
                        ) : (
                            <div>
                                <Image class={styles.slidesi} src={item.image} alt="slide1" layout='responsive' />
                                <div class={styles.cov}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div class={styles.imageBox}>
                <div class={styles.paralax}>
                    <Image class={styles.slidesi} src={ladyImage} alt="slide1" layout='responsive' />
                </div>
            </div>

        </div>
    )
}
