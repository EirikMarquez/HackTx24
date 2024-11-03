import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';
import { type Href } from 'expo-router';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href<string> };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          event.preventDefault();
          // Convert href to string if it's an object
          const url = typeof href === 'string' ? href : href.toString();
          await openBrowserAsync(url);
        }
      }}
    />
  );
}
