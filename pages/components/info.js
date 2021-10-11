import * as React from 'react';
import Image from 'next/image'
import ladyImage from '../assets/2.jpeg';
import ladyImage2 from '../assets/1.jpg';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { IoIosArrowRoundForward } from "react-icons/io";

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


export default function Info({ styles }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div class={styles.slideBox}>
            <div class={styles.infoText}>


                <div class={styles.infoTextTitle}>
                    <IoIosArrowRoundForward class={styles.forward} size={80} color="gray" />
                    <div class={styles.userbox}>
                        <p class={styles.name}>Xels Trend</p>
                        <div class={styles.userboxImage}>
                            <Image src={ladyImage2} layout='responsive' />
                        </div>
                    </div>
                </div>

                <h1 class={styles.title}>Host Lequie Artstic</h1>
                <div class={styles.li_items}>
                    <p class={styles.textx}>Formal Wears</p>
                    <p class={styles.dot}>.</p>
                    <p class={styles.textl}>Available</p>
                    <p class={styles.dot}>.</p>
                    <p class={styles.textl}>100% cotton</p>
                </div>

                <div class={styles.color}>
                    <p class={styles.select}>select color</p>
                    <div class={styles.li_itemsx}>
                        <div class={styles.circle_active}>
                            <div class={styles.col1}></div>
                        </div>
                        <div class={styles.circle}>
                            <div class={styles.col2}></div>
                        </div>
                        <div class={styles.circle}>
                            <div class={styles.col3}></div>
                        </div>
                    </div>
                </div>
                <br />
                <div class={styles.color}>
                    <p class={styles.select}>select size</p>
                    <div class={styles.li_itemsxy}>
                        <div id={styles.filled} class={styles.chip}>32</div>
                        <div class={styles.chip}>43</div>
                        <div class={styles.chip}>5</div>
                        <div id={styles.filledgreen} class={styles.chip}>67</div>
                    </div>
                </div>
                <div class={styles.description}>
                    lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <div class={styles.optionContainer}>
                <Button aria-describedby={id} variant="outlined" class={styles.butt}  onClick={handleClick}>
                Option 1
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>

                <Button aria-describedby={id} variant="outlined" class={styles.butt} onClick={handleClick}>
                Option 2
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>

                </Popover>

                <Button aria-describedby={id} variant="outlined" class={styles.butt} onClick={handleClick}>
                    Option 3
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
                </div>

              
            </div>
        </div>
    )
}
