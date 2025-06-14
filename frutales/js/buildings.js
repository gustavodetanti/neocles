export function buildings(svgElement) {



    
    // Create toolbar
    const toolbar = document.createElement('div');
    toolbar.style.position = 'absolute';
    toolbar.style.top = '10px';
    toolbar.style.left = '10px';
    toolbar.style.backgroundColor = '#f0f0f0';
    toolbar.style.padding = '10px';
    toolbar.style.borderRadius = '5px';
    toolbar.style.zIndex = '100';

    // Create buttons
    const buttons = [
        { text: 'Agregar Rectangulo', action: 'rect' },
        { text: 'Agregar Circulo', action: 'circle' },
        { text: 'Agregar Sendero', action: 'path' }
    ];

    buttons.forEach(btnInfo => {
        const button = document.createElement('button');
        button.textContent = btnInfo.text;
        button.style.margin = '5px';
        button.addEventListener('click', () => handleAction(btnInfo.action));
        toolbar.appendChild(button);
    });

    document.body.appendChild(toolbar);

    // Initialize global BUILDINGS array
    window.BUILDINGS = window.BUILDINGS || [];

    // State variables
    let isDrawing = false;
    let currentShape = null;
    let startPoint = null;
    let pathPoints = [];
    let currentAction = null;

    // Event listeners holder
    const eventListeners = {
        mousedown: null,
        mousemove: null,
        mouseup: null,
        click: null,
        dblclick: null
    };

    // Handle toolbar actions
    function handleAction(action) {
        // Clear previous event listeners
        clearEventListeners();
        resetState();

        svgElement.style.cursor = 'crosshair';
        currentAction = action;

        switch (action) {
            case 'rect':
                eventListeners.mousedown = startRect;
                svgElement.addEventListener('mousedown', eventListeners.mousedown);
                break;
            case 'circle':
                eventListeners.mousedown = startCircle;
                svgElement.addEventListener('mousedown', eventListeners.mousedown);
                break;
            case 'path':
                eventListeners.click = addPathPoint;
                eventListeners.dblclick = finalizePath;
                svgElement.addEventListener('click', eventListeners.click);
                svgElement.addEventListener('dblclick', eventListeners.dblclick);
                break;
        }
    }

    // Clear all active event listeners
    function clearEventListeners() {
        Object.entries(eventListeners).forEach(([event, handler]) => {
            if (handler) {
                svgElement.removeEventListener(event, handler);
            }
        });
    }

    // Rectangle functions
    function startRect(e) {
        isDrawing = true;
        startPoint = getMousePosition(e);
        currentShape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        currentShape.setAttribute('fill', getRandomColor());
        svgElement.appendChild(currentShape);

        eventListeners.mousemove = drawRect;
        eventListeners.mouseup = finalizeShape;

        svgElement.addEventListener('mousemove', eventListeners.mousemove);
        svgElement.addEventListener('mouseup', eventListeners.mouseup);
    }

    function drawRect(e) {
        if (!isDrawing)
            return;
        const pos = getMousePosition(e);
        const width = Math.abs(pos.x - startPoint.x);
        const height = Math.abs(pos.y - startPoint.y);
        const x = Math.min(startPoint.x, pos.x);
        const y = Math.min(startPoint.y, pos.y);

        currentShape.setAttribute('x', x);
        currentShape.setAttribute('y', y);
        currentShape.setAttribute('width', width);
        currentShape.setAttribute('height', height);
    }

    // Circle functions
    function startCircle(e) {
        isDrawing = true;
        startPoint = getMousePosition(e);
        currentShape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        currentShape.setAttribute('fill', getRandomColor());
        currentShape.setAttribute('cx', startPoint.x);
        currentShape.setAttribute('cy', startPoint.y);
        svgElement.appendChild(currentShape);

        eventListeners.mousemove = drawCircle;
        eventListeners.mouseup = finalizeShape;

        svgElement.addEventListener('mousemove', eventListeners.mousemove);
        svgElement.addEventListener('mouseup', eventListeners.mouseup);
    }

    function drawCircle(e) {
        if (!isDrawing)
            return;
        const pos = getMousePosition(e);
        const radius = Math.sqrt(
            Math.pow(pos.x - startPoint.x, 2) +
            Math.pow(pos.y - startPoint.y, 2)
        );
        currentShape.setAttribute('r', radius);
    }

    // Path functions
    function addPathPoint(e) {
        if (!isDrawing) {
            // Start new path
            isDrawing = true;
            pathPoints = [];
            currentShape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            currentShape.setAttribute('fill', 'none');
            currentShape.setAttribute('stroke', getRandomColor());
            currentShape.setAttribute('stroke-width', '2');
            svgElement.appendChild(currentShape);
        }

        const point = getMousePosition(e);
        pathPoints.push(point);
        updatePath();
    }

    function updatePath() {
        if (pathPoints.length < 1)
            return;

        let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
        for (let i = 1; i < pathPoints.length; i++) {
            d += ` L ${pathPoints[i].x} ${pathPoints[i].y}`;
        }
        currentShape.setAttribute('d', d);
    }

    function finalizePath() {
        if (pathPoints.length > 1) {
            saveBuilding();
        } else if (currentShape && currentShape.parentNode) {
            // Remove incomplete path
            currentShape.parentNode.removeChild(currentShape);
        }
        resetState();
        svgElement.style.cursor = 'default';
    }

    // Finalize shape and save to BUILDINGS
    function finalizeShape() {
        if (!currentShape)
            return;

        saveBuilding();
        resetState();
        svgElement.style.cursor = 'default';
    }

    function saveBuilding() {
        const buildingData = {
            element: currentShape.cloneNode(true),
            type: currentShape.tagName,
            position: getShapePosition(currentShape),
            color: currentShape.getAttribute('fill') || currentShape.getAttribute('stroke'),
            sizes: getShapeSizes(currentShape),
            points: currentShape.tagName === 'path' ? [...pathPoints] : null
        };

        window.BUILDINGS.push(buildingData);
    }

    // Helper functions
    function getMousePosition(e) {
        const rect = svgElement.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function getShapePosition(shape) {
        switch (shape.tagName) {
            case 'rect':
                return {
                    x: parseFloat(shape.getAttribute('x')),
                    y: parseFloat(shape.getAttribute('y'))
                };
            case 'circle':
                return {
                    x: parseFloat(shape.getAttribute('cx')),
                    y: parseFloat(shape.getAttribute('cy'))
                };
            case 'path':
                return pathPoints.length > 0 ?
                    { x: pathPoints[0].x, y: pathPoints[0].y } :
                    { x: 0, y: 0 };
        }
    }

    function getShapeSizes(shape) {
        switch (shape.tagName) {
            case 'rect':
                return {
                    width: parseFloat(shape.getAttribute('width')),
                    height: parseFloat(shape.getAttribute('height'))
                };
            case 'circle':
                return { radius: parseFloat(shape.getAttribute('r')) };
            case 'path':
                return { points: pathPoints.length };
        }
    }

    function resetState() {
        isDrawing = false;
        currentShape = null;
        startPoint = null;
        pathPoints = [];
        currentAction = null;

        // Remove active drawing listeners
        svgElement.removeEventListener('mousemove', eventListeners.mousemove);
        svgElement.removeEventListener('mouseup', eventListeners.mouseup);

        // Reset listener references
        eventListeners.mousemove = null;
        eventListeners.mouseup = null;
    }

    // Add escape key to cancel drawing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (isDrawing) {
                if (currentShape && currentShape.parentNode) {
                    currentShape.parentNode.removeChild(currentShape);
                }
                resetState();
                svgElement.style.cursor = 'default';
            }
        }
    });
}
