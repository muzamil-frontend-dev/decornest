"use client";

import React from "react";
import {
  MagnifyingGlassIcon,
  StarIcon,
  UserIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavList: {
  categories: { title: string; link: string }[];
  places: { title: string; link: string }[];
  products: { image: string; title: string; link: string; price: number }[];
} = {
  categories: [
    {
      title: "All",
      link: "/categories/all"
    },
    {
      title: "Sofa",
      link: "/categories/sofa"
    },
    {
      title: "Chair",
      link: "/categories/chair"
    },
    {
      title: "Bed",
      link: "/categories/bed"
    }
    // {
    //   title: "Dining Table",
    //   link: "/categories/dining-table"
    // }
  ],
  places: [
    {
      title: "Living Room",
      link: "/places/living-room"
    },
    {
      title: "Bedroom",
      link: "/places/bedroom"
    },
    {
      title: "Dining Room",
      link: "/places/dining-room"
    },
    {
      title: "Office",
      link: "/places/office"
    }
  ],
  products: [
    {
      image: "/products/modern-sofa.jpeg",
      title: "Modern Sofa",
      link: "/products/modern-sofa",
      price: 499
    },
    {
      image: "/products/wooden-chair.jpg",
      title: "Wooden Chair",
      link: "/products/wooden-chair",
      price: 149
    },
    {
      image: "/products/king-size-bed.jpg",
      title: "King Size Bed",
      link: "/products/king-size-bed",
      price: 799
    },
    {
      image: "/products/dining-table-set.jpeg",
      title: "Dining Table Set",
      link: "/products/dining-table-set",
      price: 699
    }
  ]
};

export default function Header() {
  const pathname = usePathname();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <header className="py-4 bg-white-600 text-black shadow-md">
      <section className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">DecorNest</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={clsx({
                    "bg-accent text-accent-foreground": pathname === "/products"
                  })}
                >
                  <Link href="/products">Products</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <section className="grid gap-12 md:grid-cols-3 px-12 py-6">
                    <div className="col">
                      <h1 className="text-md font-semibold pb-4">
                        By Category
                      </h1>
                      <ul>
                        {NavList.categories.map((category) => (
                          <li
                            key={category.title}
                            title={category.title}
                            // href={category.link}
                            className="text-sm mb-2 text-gray-500"
                          >
                            {category.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col border-x border-grey px-8">
                      <h1 className="text-md font-semibold pb-4">By Space</h1>
                      <ul>
                        {NavList.places.map((place) => (
                          <li
                            key={place.title}
                            title={place.title}
                            // href={place.href}
                            className="text-sm mb-2 text-gray-500"
                          >
                            {place.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col">
                      <h1 className="text-md font-semibold pb-4">
                        Featured Product
                      </h1>
                      <Carousel
                        className="w-64"
                        opts={{
                          align: "start",
                          loop: true
                        }}
                        plugins={[plugin.current]}
                      >
                        <CarouselContent>
                          {NavList.products.map((product) => (
                            <CarouselItem key={product.title}>
                              <Card className="text-center">
                                <CardContent>
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={1000}
                                    height={760}
                                    className="h-64 rounded-md shadow-sm mb-4"
                                  />
                                  <CardDescription className="text-black font-medium">
                                    {product.title}
                                  </CardDescription>
                                  <CardDescription>
                                    ${product.price}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                  </section>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-6">
          <Dialog>
            <DialogTrigger>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent className="max-w-full top-0 translate-y-0 sm:rounded-none">
              <div className="container mx-auto">
                <InputGroup>
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton>Search</InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                <div className="mt-6">
                  <h2 className="text-xs font-bold">HOT SEARCHES:</h2>
                  <div className="flex gap-2 mt-1">
                    <Button className="bg-gray-500 text-white">Plant</Button>
                    <Button className="bg-gray-500 text-white">Clock</Button>
                    <Button className="bg-gray-500 text-white">Chair</Button>
                    <Button className="bg-gray-500 text-white">Lamp</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <UserIcon className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent className="max-w-sm h-full left-auto right-0 translate-x-0 sm:rounded-none">
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <StarIcon className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent className="max-w-sm h-full left-auto right-0 translate-x-0 sm:rounded-none">
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <ShoppingCartIcon className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent className="max-w-sm h-full left-auto right-0 translate-x-0 sm:rounded-none">
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </header>
  );
}
