import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

export function ProfileCard({ name, title, bio, socialLinks }: ProfileCardProps) {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');

  return (
    <section id="profile">
      <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl md:grid md:grid-cols-3">
        <div className="md:col-span-1">
          {profileImage && (
            <div className="relative h-64 w-full md:h-full">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <CardHeader>
            <h2 className="font-headline text-3xl font-bold text-primary">{name}</h2>
            <p className="text-lg font-medium text-muted-foreground">{title}</p>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-base leading-relaxed">{bio}</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Connect with me:</span>
              <div className="flex space-x-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
