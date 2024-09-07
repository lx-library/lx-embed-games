const mindMapData = {
    "id": "1",
    "title": "Mind Map",
    "nodes": [
      {
        "id": "n1",
        "text": "Central Node",
        "position": { "x": 300, "y": 200 },
        "connections": ["n2", "n3"]
      },
      {
        "id": "n2",
        "text": "Child Node 1",
        "position": { "x": 200, "y": 100 },
        "connections": ["n4"]
      },
      {
        "id": "n3",
        "text": "Child Node 2",
        "position": { "x": 400, "y": 100 },
        "connections": []
      },
      {
        "id": "n4",
        "text": "Grandchild Node",
        "position": { "x": 100, "y": 50 },
        "connections": []
      }
    ]
  };
  
  function drawMindMap(mindMapData) {
    const canvas = document.getElementById('mindmapCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const nodeRadius = 20;
  
    // Draw connections
    mindMapData.nodes.forEach(node => {
      node.connections.forEach(connectionId => {
        const targetNode = mindMapData.nodes.find(n => n.id === connectionId);
        if (targetNode) {
          ctx.beginPath();
          ctx.moveTo(node.position.x, node.position.y);
          ctx.lineTo(targetNode.position.x, targetNode.position.y);
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    });
  
    // Draw nodes
    mindMapData.nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.position.x, node.position.y, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
  
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '14px Arial';
      ctx.fillText(node.text, node.position.x, node.position.y);
    });
  }
  
  window.onload = () => {
    drawMindMap(mindMapData);
  };
  
  window.onresize = () => {
    drawMindMap(mindMapData);
  };
  