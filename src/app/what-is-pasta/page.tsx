import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Ghost,
  Users,
  Globe,
  AlertTriangle,
  Heart,
} from "lucide-react";

export default function WhatIsPasta() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          What are Creepypastas?
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover the fascinating world of internet horror stories and urban
          legends
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Definition & Origins
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <strong>Creepypastas</strong> are horror stories or urban legends
              that are shared and circulated on the internet. The term is a
              combination of &ldquo;creepy&rdquo; and &ldquo;copypasta&rdquo;
              (internet slang for text that gets copied and pasted across forums
              and websites).
            </p>
            <p className="text-muted-foreground">
              These stories typically feature supernatural elements,
              psychological horror, or disturbing scenarios that are designed to
              unsettle and frighten readers. They often blur the line between
              fiction and reality, creating an immersive and terrifying
              experience for those who encounter them.
            </p>
            <p className="text-muted-foreground">
              The genre emerged in the early 2000s on internet forums like 4chan
              and Reddit, where users would share scary stories and urban
              legends. Over time, creepypastas have evolved into a distinct form
              of digital folklore.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ghost className="h-5 w-5" />
              Common Themes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">
                    Supernatural Entities:
                  </strong>
                  <p className="text-muted-foreground text-sm">
                    Ghosts, demons, and otherworldly beings
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">
                    Psychological Horror:
                  </strong>
                  <p className="text-muted-foreground text-sm">
                    Mind games, paranoia, and mental breakdowns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">
                    Technology Gone Wrong:
                  </strong>
                  <p className="text-muted-foreground text-sm">
                    Cursed websites, haunted devices, AI horror
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Urban Legends:</strong>
                  <p className="text-muted-foreground text-sm">
                    Modern folklore and contemporary myths
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community & Culture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Creepypastas have fostered a vibrant online community of horror
              enthusiasts, writers, and storytellers. These communities share,
              discuss, and create new stories, often building upon existing
              narratives or creating entirely new ones.
            </p>
            <p className="text-muted-foreground">
              The genre has influenced various forms of media, including video
              games, movies, and television shows. Many popular horror
              franchises have drawn inspiration from creepypasta stories and
              themes.
            </p>
            <p className="text-muted-foreground">
              Social media platforms and messaging apps like Telegram have
              become important channels for sharing and discovering new
              creepypastas, allowing stories to spread rapidly across the
              internet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Global Phenomenon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While creepypastas originated in English-speaking internet
              communities, they have become a global phenomenon. Stories are
              translated, adapted, and localized for different cultures and
              languages.
            </p>
            <p className="text-muted-foreground">
              Different regions have developed their own unique takes on the
              genre, incorporating local folklore, cultural fears, and regional
              urban legends into the creepypasta format.
            </p>
            <p className="text-muted-foreground">
              The universal appeal of horror and the accessibility of digital
              platforms have made creepypastas a truly international form of
              storytelling.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertTriangle className="h-5 w-5" />
              Content Warning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Creepypastas often contain graphic content, disturbing themes, and
              psychological horror elements. Reader discretion is advised,
              especially for those who are sensitive to horror content or have
              anxiety disorders.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Heart className="h-5 w-5" />
              Appreciation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These stories represent a unique form of digital storytelling and
              modern folklore. They showcase the creativity and imagination of
              internet communities while exploring universal fears and
              anxieties.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
