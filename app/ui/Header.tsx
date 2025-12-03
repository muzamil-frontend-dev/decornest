import {
  MagnifyingGlassIcon,
  StarIcon,
  UserIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
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
// import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  }
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  // }
];

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
  return (
    <header className="w-full py-4 px-6 bg-white-600 text-black flex justify-between items-center shadow-md">
      <div className="flex-2">
        <h1 className="text-2xl font-bold">DecorNest</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/home">Home</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <section className="grid gap-12 md:grid-cols-3 px-12 py-6">
                  <div className="col">
                    <h1 className="text-md font-semibold pb-4">By Category</h1>
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
                      // plugins={[
                      //   Autoplay({
                      //     delay: 2000
                      //   })
                      // ]}
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
              <NavigationMenuTrigger>
                <Link href="/blog">Blog</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <nav className="flex-2">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <UserIcon className="h-5 w-5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <StarIcon className="h-5 w-5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <ShoppingCartIcon className="h-5 w-5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
    </header>
  );
}
