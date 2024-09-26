import { formatDate } from "@/lib/date-format";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PostFooter = ({
  publishedAt,
  category,
}: {
  publishedAt: string;
  category: string;
}) => (
  <div className="flex items-center space-x-4 mt-4">
    {/* <Avatar>
      <AvatarImage src={authorImg} alt={author} />
      <AvatarFallback>
        {author
          .split(" ")
          .map((name: string) => name[0])
          .join("")}
      </AvatarFallback>
    </Avatar> */}
    <div>
      {/* <p className="text-sm font-medium">{author}</p> */}
      <p className="text-sm font-medium">{category}</p>
      <p className="text-xs text-muted-foreground">
        Published on {formatDate(publishedAt)}
      </p>
    </div>
  </div>
);
