import React, { useState } from 'react';
import cl from './VolumeTrack.module.css'
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff"; // Импортируем иконку без звука
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const VolumeTrack = ({ onChange, value }) => {
    const [isVolumeControlVisible, setVolumeControlVisible] = useState(false);
    const toggleVolumeControl = () => setVolumeControlVisible(!isVolumeControlVisible);

    // Функция для отображения нужной иконки в зависимости от уровня громкости
    const volumeIcon = value === 0 ? <VolumeOff/> : <VolumeUp/>;

    const handleSliderChange = (newValue) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className={cl.volume}>
            <div className={cl.button} onClick={toggleVolumeControl}>
                {volumeIcon}
            </div>
            {isVolumeControlVisible && (
                <div className={cl.verticalSlider}>
                    <Slider
                        className={cl.slider}
                        type="range"
                        min={0}
                        max={100}
                        value={value}
                        onChange={handleSliderChange}
                        vertical={true}
                        styles={{
                            track: { backgroundColor: '#D896B7', width: '8px' },
                            rail: { backgroundColor: '#CAD6EC', width: '8px' },
                            handle: {
                                height: '20px',
                                width: '20px',
                                marginLeft: '-6px',
                                opacity:'1',
                                border:'4px solid #D896B7',
                                backgroundColor: '#FFFFFF',
                            },
                            handleDragging: {
                                boxShadow:'#D896B7'
                            }
                        }}
                    />
                </div>

            )}
        </div>
    );
};

export default VolumeTrack;
