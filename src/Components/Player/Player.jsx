import React, { useEffect, useState, useRef } from 'react';
import styles from './Player.module.css';
import { IconButton} from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import VolumeTrack from "../../UI/VolumeTrack/VolumeTrack";
import closeimg from '../../Assets/Icons/icons-main-close.svg'
import {SkipNext, SkipPrevious} from "@mui/icons-material";

const TrackProgress = ({ left, right, onChange }) => {
    const percentage = (left / right) * 100;

    const trackStyle = {
        background: `linear-gradient(to right, #D896B7 0%, #D896B7 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`
    };

    return (
        <div style={{ display: 'flex' }}>
            <input
                type="range"
                min="0"
                max={right}
                value={left}
                onChange={onChange}
                style={trackStyle}
            />
        </div>
    );
};


const Player = ({ src, name, artist, type, img, close, radio=false }) => {
    const [active] = useState(src);
    const [pause, setPause] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(new Audio());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        audio.src = active;
        audio.onloadedmetadata = () => setDuration(Math.ceil(audio.duration));
        audio.ontimeupdate = () => setCurrentTime(Math.ceil(audio.currentTime));

        const handleCanPlay = () => {
            setIsLoading(false); // Загрузка завершена, можно играть
        };

        const handleWaiting = () => {
            setIsLoading(true); // Ожидание данных для воспроизведения
        };

        // Добавьте слушателя события, чтобы очистить его позже
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('waiting', handleWaiting);

        return () => {
            audio.pause();
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('waiting', handleWaiting);
        };
    }, [active, audioRef]);

    useEffect(() => {
        if (active && !isLoading) audioRef.current.play()
    }, [isLoading, active]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume / 100;
    }, [volume]);

    const handleProgressChange = e => {
        const newTime = Number(e.target.value);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime; // Установка нового времени воспроизведения
    };

    const togglePlay = () => {
        if (pause) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setPause(!pause);
    };

    if (!active) return null;

    return (
        <div className={styles.player}>
            <div className={styles.control}>
                <IconButton className={styles.iconButton}>
                    <SkipPrevious className={styles.icon}/>
                </IconButton>
                <IconButton onClick={togglePlay} className={styles.iconButton}>
                    {pause ? <PlayArrow className={styles.icon}/> : <Pause className={styles.icon}/>}
                </IconButton>
                <IconButton className={styles.iconButton}>
                    <SkipNext className={styles.icon}/>
                </IconButton>
            </div>
            <div className={styles.content}>
                <img className={styles.img} src={img} alt={'avatar'} />
                <div className={styles.col}>
                    <span className={styles.type}>{type}</span>
                    <span className={styles.name}>{isLoading ? 'Идет загрузка...' : name}</span>
                    <span className={styles.artist}>{artist}</span>
                </div>
            </div>
            { radio ? <></> : <TrackProgress left={currentTime} right={duration}
                            onChange={handleProgressChange}/>}
            <div className={styles.lastSection}>
                <IconButton className={styles.volumeControl}>
                    <VolumeTrack value={volume} onChange={setVolume}/>
                </IconButton>
                <button className={styles.close} onClick={() => close(false)}>
                    <img src={closeimg} alt={'close'}/>
                </button>
            </div>
        </div>
    );
};

export default Player;
