
import boxen  from "boxen";
export function drawIcon(title: string) {
  return boxen("unicorn", {
    padding: 1,
    backgroundColor: "red",
    textAlignment: "center",
    title 
  });
}
