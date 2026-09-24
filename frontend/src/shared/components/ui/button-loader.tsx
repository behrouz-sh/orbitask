import { cn } from 'cn';

function ButtonLoader() {
  return (
    <span className="absolute inset-0 flex items-center justify-center gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            'size-1.5 rounded-full',
            'animate-loader-dot',
            index === 2 && 'box-content border-2'
          )}
          style={{
            animationDelay: `${index * 150}ms`,
          }}
        />
      ))}
    </span>
  );
}

export { ButtonLoader };
