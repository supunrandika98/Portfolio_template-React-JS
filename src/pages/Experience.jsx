import React from 'react';
import '../App.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import { FaBook } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

export const Experience = () => {
    return (
        <div>
            <h1 style={{marginTop: '4%', fontSize: '2.5rem'}}>My Education</h1>
            <Timeline position="alternate" style={{margin: '5% auto'}}>

                <TimelineItem >
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    fontSize="1.2rem"
                    >
                    2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{backgroundColor: 'green', fontSize: '1.3rem'}}>
                        <FaBook />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        G.C.E Advanced Level Examination
                    </Typography>
                    <Typography>Piliyandala Central College - Science Stream</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    fontSize="1.2rem"
                    >
                    2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Diploma in Information Technology
                    </Typography>
                    <Typography>Esoft Metro Campus</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    fontSize="1.2rem"
                    >
                    2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Diploma in Software Engineering
                    </Typography>
                    <Typography>Esoft Metro Campus</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    fontSize="1.2rem"
                    >
                    2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot  style={{backgroundColor: 'black', fontSize: '1.4rem'}}>
                        <IoSchool />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Bachelor of Software Engineering (Undergraduate) 
                    </Typography>
                    <Typography>The Open University of Sri Lanka</Typography>
                    </TimelineContent>
                </TimelineItem>

                </Timeline>
        </div>
    )
}
