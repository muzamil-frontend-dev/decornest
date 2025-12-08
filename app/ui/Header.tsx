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

const NavList: {
  categories: { title: string; href: string }[];
  places: { title: string; href: string }[];
  products: { image: string; title: string; href: string; price: number }[];
} = {
  categories: [
    {
      title: "All",
      href: "/categories/all"
    },
    {
      title: "Sofa",
      href: "/categories/sofa"
    },
    {
      title: "Chair",
      href: "/categories/chair"
    },
    {
      title: "Bed",
      href: "/categories/bed"
    }
    // {
    //   title: "Dining Table",
    //   href: "/categories/dining-table"
    // }
  ],
  places: [
    {
      title: "Living Room",
      href: "/places/living-room"
    },
    {
      title: "Bedroom",
      href: "/places/bedroom"
    },
    {
      title: "Dining Room",
      href: "/places/dining-room"
    },
    {
      title: "Office",
      href: "/places/office"
    }
  ],
  products: [
    {
      image: "/products/modern-sofa.jpeg",
      title: "Modern Sofa",
      href: "/products/modern-sofa",
      price: 499
    },
    {
      image: "/products/wooden-chair.jpg",
      title: "Wooden Chair",
      href: "/products/wooden-chair",
      price: 149
    },
    {
      image: "/products/king-size-bed.jpg",
      title: "King Size Bed",
      href: "/products/king-size-bed",
      price: 799
    },
    {
      image: "/products/dining-table-set.jpeg",
      title: "Dining Table Set",
      href: "/products/dining-table-set",
      price: 699
    }
  ]
};

export default function Header() {
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
                  <Link href="/home">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
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
                            href={category.href}
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
                            href={place.href}
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
                  <Link href="/home">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/home">Contact</Link>
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
