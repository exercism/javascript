export const findSequence = (start, prisms) => {
  let { x, y, angle } = start;
  const sequence = [];

  while (true) {
    const rad = (angle * Math.PI) / 180;
    const dirX = Math.cos(rad);
    const dirY = Math.sin(rad);

    let nearest = null;
    let nearestDist = Infinity;

    for (const prism of prisms) {
      const dx = prism.x - x;
      const dy = prism.y - y;

      const dist = dx * dirX + dy * dirY;
      const baseTolerance = 1e-6;
      if (dist <= baseTolerance) continue;

      const crossProductSquared =
        (dx - dist * dirX) ** 2 + (dy - dist * dirY) ** 2;
      const relativeTolerance = baseTolerance * Math.max(1, dist * dist);
      if (crossProductSquared >= relativeTolerance) continue;

      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = prism;
      }
    }

    if (!nearest) break;

    sequence.push(nearest.id);
    x = nearest.x;
    y = nearest.y;
    angle = (angle + nearest.angle) % 360;
  }

  return sequence;
};
