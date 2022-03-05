export default interface OptionProps {
    children: string, 
    selected: boolean,
    value: "low" | "normal" | "high",
    onClick?: Function,
    color: string
}