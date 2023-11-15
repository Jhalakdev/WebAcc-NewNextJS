"use client"

import uiux from './uiux.module.css'
import { useEffect, useRef } from "react"
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

export default function Canvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current, {
            
            DYE_RESOLUTION: 720,
            CAPTURE_RESOLUTION: 100,
            DENSITY_DISSIPATION: 1,
            VELOCITY_DISSIPATION: 0.2,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 6,
            CURL: 15,
            INITIAL: false,
            SPLAT_AMOUNT: 5,
            SPLAT_RADIUS: 0.25,
            SPLAT_FORCE: 6000,
            SPLAT_KEY: 'Space',
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 15,
            COLOR_PALETTE: [],
            HOVER: true,
            BACK_COLOR: '#000000',
            TRANSPARENT: false,
            BRIGHTNESS: 0.5,
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 1.0,
        });
    }, []);
    return (<canvas className={uiux.canvas} ref={canvasRef} id='canvas'></canvas>)
}