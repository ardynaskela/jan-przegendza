import { GrainGradient } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {
    
    const defaultProps = {
        speed: 1.4,
        style: { width: '100%', height: '100%' }
    };

    return <Warp {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}