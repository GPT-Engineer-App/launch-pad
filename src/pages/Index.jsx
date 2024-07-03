import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { DollarSign, Info, MessageSquare, Star } from "lucide-react";
import heroImage from "../../public/images/hero-image.png";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-lg text-muted-foreground">
          Revolutionizing the way you manage your business.
        </p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <div className="mt-8">
          <img src={heroImage} alt="SaaS Product" className="mx-auto w-full max-w-4xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={<Info className="h-6 w-6" />} title="Feature One" description="Description of feature one." />
          <FeatureCard icon={<Info className="h-6 w-6" />} title="Feature Two" description="Description of feature two." />
          <FeatureCard icon={<Info className="h-6 w-6" />} title="Feature Three" description="Description of feature three." />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <TestimonialCard name="John Doe" feedback="This product has changed my life!" />
            </CarouselItem>
            <CarouselItem>
              <TestimonialCard name="Jane Smith" feedback="Incredible features and amazing support." />
            </CarouselItem>
            <CarouselItem>
              <TestimonialCard name="Sam Wilson" feedback="I can't imagine working without it." />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard title="Basic" price="$10/month" features={["Feature A", "Feature B", "Feature C"]} />
          <PricingCard title="Pro" price="$20/month" features={["Feature A", "Feature B", "Feature C"]} popular />
          <PricingCard title="Enterprise" price="$30/month" features={["Feature A", "Feature B", "Feature C"]} />
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader className="flex items-center space-x-4">
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, feedback }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{feedback}</p>
    </CardContent>
  </Card>
);

const PricingCard = ({ title, price, features, popular }) => (
  <Card className={popular ? "border-2 border-primary" : ""}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <p className="text-lg font-bold">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default Index;