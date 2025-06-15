export function Rats(container) {
    // SVG setup
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
    svg.setAttribute("viewBox", "0 0 1500 1400");
    svg.style.backgroundColor = "transparent";
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    
    
    
    // Circle setup
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "5");
    circle.setAttribute("fill", "#000000");
    svg.appendChild(circle);
    
    // Vehicle properties
    const vehicle = {
        x: Math.random() * 1400 + 50,  // Random start position (avoid edges)
        y: Math.random() * 1300 + 50,
        velocity: 0.1 + Math.random(),  // Random speed between 2-5
        direction: Math.random() * Math.PI * 2,  // Random initial direction (radians)
        turnSpeed: 0.05 + Math.random() * 0.05,  // How quickly it can turn
        nextDirectionChange: 0,
        radius: 5
    };
    
    // Update circle position
    function updatePosition() {
        // Move according to current direction
        vehicle.x += Math.cos(vehicle.direction) * vehicle.velocity;
        vehicle.y += Math.sin(vehicle.direction) * vehicle.velocity;
        
        // Random smooth direction changes
        if (Math.random() < 0.02 || vehicle.nextDirectionChange-- <= 0) {
            const targetDirection = Math.random() * Math.PI * 2;
            vehicle.nextDirectionChange = 20 + Math.floor(Math.random() * 50);
        }
        
        // Gradually adjust direction toward target
        vehicle.direction += (Math.random() - 0.5) * vehicle.turnSpeed;
        
        // Boundary checks with smooth bouncing
        if (vehicle.x < vehicle.radius) {
            vehicle.x = vehicle.radius;
            vehicle.direction = Math.PI - vehicle.direction;
        } else if (vehicle.x > 1500 - vehicle.radius) {
            vehicle.x = 1500 - vehicle.radius;
            vehicle.direction = Math.PI - vehicle.direction;
        }
        
        if (vehicle.y < vehicle.radius) {
            vehicle.y = vehicle.radius;
            vehicle.direction = -vehicle.direction;
        } else if (vehicle.y > 1400 - vehicle.radius) {
            vehicle.y = 1400 - vehicle.radius;
            vehicle.direction = -vehicle.direction;
        }
        
        // Update visual position
        circle.setAttribute("cx", vehicle.x);
        circle.setAttribute("cy", vehicle.y);
        
        // Continue animation
        requestAnimationFrame(updatePosition);
    }
    
    // Start animation
    updatePosition();
    
    // Add to container
    container.appendChild(svg);
    
    // Return API for controlling the vehicle if needed
    return {
        svg,
        getVehicle: () => ({ ...vehicle }),  // Read-only access
        setVelocity: (v) => { vehicle.velocity = v },
        setColor: (color) => circle.setAttribute("fill", color)
    };
}