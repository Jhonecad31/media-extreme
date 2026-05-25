export interface ImageKitLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export function imageKitLoader({ src, width, quality }: ImageKitLoaderProps): string {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '';
  
  if (!urlEndpoint || urlEndpoint.includes('your_imagekit_id')) {
    console.warn(`[ImageKit] Usando fallback local para "${src}" porque NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT no está configurada o usa la plantilla.`);
    return src;
  }

  const normalizedEndpoint = urlEndpoint.endsWith('/') 
    ? urlEndpoint.slice(0, -1) 
    : urlEndpoint;

  let relativeSrc = src;
  if (src.startsWith('http://') || src.startsWith('https://')) {
    if (src.startsWith(normalizedEndpoint)) {
      relativeSrc = src.replace(normalizedEndpoint, '');
    } else {
      return src;
    }
  }

  if (!relativeSrc.startsWith('/')) {
    relativeSrc = `/${relativeSrc}`;
  }

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  } else {
    params.push('q-80');
  }

  params.push('f-auto');
  const transformationString = `tr:${params.join(',')}`;

  const finalUrl = `${normalizedEndpoint}/${transformationString}${relativeSrc}`;
  console.log(`[ImageKit] URL generada con éxito para "${src}":`, finalUrl);
  return finalUrl;
}

export interface TransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  blur?: number;
  crop?: 'force' | 'at_max' | 'at_least' | 'maintain_ratio';
  focus?: 'auto' | 'face';
  [key: string]: unknown;
}

/**
 * Generates an ImageKit URL with custom transforms.
 * Useful for css background images, Open Graph tags, or custom rendering where <Image> is not used.
 * 
 * @param path Relative path to the image or absolute ImageKit URL
 * @param options Object containing transformation options (width, height, quality, blur, crop, etc.)
 */
export function getIKUrl(path: string, options: TransformOptions = {}): string {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '';
  
  // Fallback to local files if endpoint is not set or is still the template placeholder
  if (!urlEndpoint || urlEndpoint.includes('your_imagekit_id')) {
    return path;
  }

  const normalizedEndpoint = urlEndpoint.endsWith('/') 
    ? urlEndpoint.slice(0, -1) 
    : urlEndpoint;
  
  let relativePath = path;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    if (path.startsWith(normalizedEndpoint)) {
      relativePath = path.replace(normalizedEndpoint, '');
    } else {
      return path;
    }
  }

  if (!relativePath.startsWith('/')) {
    relativePath = `/${relativePath}`;
  }

  const params: string[] = [];
  if (options.width) params.push(`w-${options.width}`);
  if (options.height) params.push(`h-${options.height}`);
  if (options.quality) params.push(`q-${options.quality}`);
  if (options.blur) params.push(`bl-${options.blur}`);
  
  if (options.crop) {
    const cropMap = {
      force: 'force',
      at_max: 'at_max',
      at_least: 'at_least',
      maintain_ratio: 'maintain_ratio',
    };
    params.push(`c-${cropMap[options.crop] || options.crop}`);
  }
  
  if (options.focus) params.push(`fo-${options.focus}`);

  // Add any additional dynamic parameters
  for (const [key, value] of Object.entries(options)) {
    if (['width', 'height', 'quality', 'blur', 'crop', 'focus'].includes(key)) continue;
    params.push(`${key}-${value}`);
  }

  if (params.length === 0) {
    return `${normalizedEndpoint}${relativePath}`;
  }

  return `${normalizedEndpoint}/tr:${params.join(',')}${relativePath}`;
}
