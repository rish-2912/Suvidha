import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import demo from "../../assets/demo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Search from "./Search";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import rajkot from "../../assets/rajkot.png"
import tran from "../../assets/tran.png"
import joshimath from "../../assets/joshimath.png"
const arr = [
    {
        "id": "1",
        "title": "A Safe Home To Thousands Of Cows, This Gaushala Now Needs Your Help To Give Them A Better Life",
        "story": "80 children have found a home and a loving family in Manalo Manam started by a well-meaning couple in Ongole. Donate groceries and construction materials to support their mission.",
        "img": `${demo}`
    },
    {
        "id": "2",
        "title": "Vijay Is Working Tirelessly For The Abandoned Elderly, Join Him To Support His Cause",
        "story": "Home to 400+ elderly, this NGO in Rajkot is working tirelessly to give them a happy and comfortable life. You can join their mission by donating groceries and hygiene products.",
        'img': `${rajkot}`
    },
    {
        "id": "3",
        "title": "Despite Battling Cancer, This Trans Woman Is Working Tirelessly To Support The Elderly",
        "story": "Even as she battles blood cancer, Nakshatra keeps worrying about the elderlies at her shelter home. She is determined to give them a better life, and you can help by donating groceries and construction materials.",
        "img": `${tran}`
    },
    {
        "id": "4",
        "title": "Hundreds Of People & Animals Have Been Devastated By The Joshimath Disaster, Donate To Save Them",
        "story": "Hundreds of people have been forced to leave their homes as Joshimath in Uttarakhand has been ‘sinking’. Countless strays are at risk of losing their lives too. Your support will make a huge difference",
        "img": `${joshimath}`
    },
]
const Itembox = styled(Box)(({ theme }) => ({

}))
export default class Items extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <div style={{ width: '768px', height: 'auto', boxShadow: '0 5px 10px -5px', borderRadius: '12px', textAlign: 'center', margin: '-100px auto 8px', position: 'relative', zIndex: '100', background: 'white' }}>
                <div>
                    <Slider {...settings}>
                        {
                            arr.map((item) => {
                                return (
                                    <Itembox key={item.id} style={{ padding: '16px', fontFamily: 'Poppins' }}>
                                        <Box style={{ display: 'flex', padding: '16px' }}>
                                            <img src={item.img} style={{ height: '200px', width: '30%' }} />
                                            <Box style={{ width: '70%', textAlign: 'left', padding: '0 24px' }}>
                                                <Typography style={{ background: 'red', width: '100px', textAlign: 'center', borderRadius: '12px', color: 'white', fontFamily: 'inherit', fontWeight: 'bold', margin: '7px 0' }}>Featured</Typography>
                                                <Typography style={{ fontFamily: 'inherit', fontWeight: '600', paddingTop: '6px' }}>{item.title}</Typography>
                                                <Typography style={{ color: 'rgba(17,17,17,.3) !important;', fontFamily: 'inherit', fontSize: '13px', padding: '6px 0' }}>{item.story}</Typography>
                                                <Box style={{ display: 'flex' }}>
                                                    <Button style={{ fontFamily: 'inherit', color: 'rgb(69, 165, 255)', padding: '0', fontSize: '13px', fontWeight: 'bold', justifyContent: 'left' }}>Donate<ArrowForwardIcon style={{ fontSize: '14px', margin: 'auto 0', color: 'rgb(69, 165, 255)' }} /></Button>

                                                </Box>
                                            </Box>

                                        </Box>
                                    </Itembox>)
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

