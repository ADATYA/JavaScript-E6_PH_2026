function normalizeUnits(manifest) {
  const normalized = { ...manifest };
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  return normalized;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId: positive integer
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  // destination: non-empty string after trimming
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  // weight: positive number
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  // unit: "kg" or "lb"
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat: boolean
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}