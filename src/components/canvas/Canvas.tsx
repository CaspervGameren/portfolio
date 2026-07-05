import { Component, onMount, onCleanup } from 'solid-js';

export const LightningBackground: Component = () => {
    let canvasRef: HTMLCanvasElement | undefined;
    let animationFrameId: number;

    onMount(() => {
        if (!canvasRef) return;
        let ctx = canvasRef.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvasRef!.width = window.innerWidth;
            canvasRef!.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        const render = () => {
            ctx.clearRect(0, 0, canvasRef!.width, canvasRef!.height);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        onCleanup(() => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        })
    });

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "z-index": -1,          
                "pointer-events": "none",
            }}
        >

        </canvas>
    )
}