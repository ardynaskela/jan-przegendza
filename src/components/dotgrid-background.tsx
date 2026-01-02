import { DotGridShape } from '@paper-design/shaders-react';

export default function DotGridBackground(props: DotGridProps) {
    
    const defaultProps = {
        speed: 1.4,
        style: { width: '100%', height: '100%' }
    };

    return <DotGrid {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}