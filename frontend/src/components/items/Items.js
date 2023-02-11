import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import demo from "../../assets/demo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Search from "./Search";
const arr = [
    {
        "id": "1",
        "title": "A Safe Home To Thousands Of Cows, This Gaushala Now Needs Your Help To Give Them A Better Life",
        "story": "80 children have found a home and a loving family in Manalo Manam started by a well-meaning couple in Ongole. Donate groceries and construction materials to support their mission."
    },
    {
        "id": "2",
        "title": "Parents To 80 Orphaned Kids, This Couple Is Working Tirelessly To Give Them A Better Life",
        "story": "80 children have found a home and a loving family in Manalo Manam started by a well-meaning couple in Ongole. Donate groceries and construction materials to support their mission."
    },
    {
        "id": "3",
        "title": "A Safe Home To Thousands Of Cows, This Gaushala Now Needs Your Help To Give Them A Better Life",
        "story": "80 children have found a home and a loving family in Manalo Manam started by a well-meaning couple in Ongole. Donate groceries and construction materials to support their mission."
    },
    {
        "id": "4",
        "title": "A Safe Home To Thousands Of Cows, This Gaushala Now Needs Your Help To Give Them A Better Life",
        "story": "80 children have found a home and a loving family in Manalo Manam started by a well-meaning couple in Ongole. Donate groceries and construction materials to support their mission."
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
                                            <img src={demo} style={{ height: '200px', width: '30%' }} />
                                            <Box style={{ width: '70%', textAlign: 'left', padding: '0 24px' }}>
                                                <Typography style={{ background: 'red', width: '100px', textAlign: 'center', borderRadius: '12px', color: 'white', fontFamily: 'inherit', fontWeight: 'bold', margin: '7px 0' }}>Featured</Typography>
                                                <Typography style={{ fontFamily: 'inherit', fontWeight: '600', paddingTop: '6px' }}>{item.title}</Typography>
                                                <Typography style={{ color: 'rgba(17,17,17,.3) !important;', fontFamily: 'inherit', fontSize: '13px', padding: '6px 0' }}>{item.story}</Typography>
                                                <Box style={{ display: 'flex' }}>
                                                    <Button style={{ fontFamily: 'inherit', color: 'green', padding: '0', fontSize: '13px', fontWeight: 'bold', justifyContent: 'left' }}>Donate</Button>
                                                    <ArrowForwardIcon style={{ fontSize: '14px', margin: 'auto 0', color: 'green' }} />
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