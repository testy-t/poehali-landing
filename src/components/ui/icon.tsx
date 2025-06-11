import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense } from "react";

const fallbackIcon = lazy(dynamicIconImports["circle-alert"]);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  fallback?: keyof typeof dynamicIconImports;
}

const Icon = ({ name, fallback, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);
  const FallbackIcon = fallback
    ? lazy(dynamicIconImports[fallback])
    : fallbackIcon;

  return (
    <Suspense fallback={<FallbackIcon {...props} />}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
