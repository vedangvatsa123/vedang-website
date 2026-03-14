import { randomBytes } from 'crypto';

const X_API_BASE = 'https://api.twitter.com/2';
const X_TOKEN_URL = 'https://twitter.com/2/oauth2/token';

export interface XPostOptions {
  text: string;
  media_ids?: string[];
}

export interface XOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

/**
 * Exchange OAuth code for access token using Authorization Code Flow
 */
export async function getXAccessToken(
  code: string,
  config: XOAuthConfig
): Promise<{ access_token: string; token_type: string }> {
  const response = await fetch(X_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      redirect_uri: config.redirectUri,
      code,
    }).toString(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to get X access token: ${JSON.stringify(error)}`);
  }

  return response.json();
}

/**
 * Post to X (Twitter)
 */
export async function postToX(
  options: XPostOptions,
  accessToken: string
): Promise<{ data: { id: string; text: string } }> {
  if (!options.text) {
    throw new Error('Post text is required');
  }

  if (options.text.length > 280) {
    throw new Error('Post text exceeds 280 characters');
  }

  const payload: Record<string, unknown> = {
    text: options.text,
  };

  if (options.media_ids && options.media_ids.length > 0) {
    payload.media = {
      media_ids: options.media_ids,
    };
  }

  const response = await fetch(`${X_API_BASE}/tweets`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Failed to post to X: ${error.errors?.[0]?.message || JSON.stringify(error)}`
    );
  }

  return response.json();
}

/**
 * Upload media to X
 */
export async function uploadXMedia(
  mediaBuffer: Buffer,
  mediaType: 'image/jpeg' | 'image/png' | 'image/gif' | 'video/mp4',
  accessToken: string
): Promise<string> {
  // X media upload uses different endpoint
  const uploadUrl = 'https://upload.twitter.com/1.1/media/upload.json';

  const formData = new FormData();
  formData.append('media_data', Buffer.from(mediaBuffer).toString('base64'));

  const response = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload media to X');
  }

  const data = (await response.json()) as { media_id_string: string };
  return data.media_id_string;
}

/**
 * Get authenticated user info
 */
export async function getXUserInfo(
  accessToken: string
): Promise<{ data: { id: string; username: string; name: string } }> {
  const response = await fetch(`${X_API_BASE}/users/me`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get X user info');
  }

  return response.json();
}
