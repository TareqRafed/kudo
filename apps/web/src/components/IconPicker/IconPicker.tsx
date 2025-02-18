'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { icons, colors } from './IconsColors';
import { ImageSquare } from '@phosphor-icons/react';
import * as Select from '@radix-ui/react-select';

interface Props extends ComponentPropsWithoutRef<typeof Button> {
  defaultIcon?: (typeof icons)[number]['name'] | (string & {}) | null;
  defaultColor?: (typeof colors)[number]['color'] | (string & {}) | null;
  onIconChange?: (color: string, icon: string) => void;
}

/**
 * There is a select issue when selecting the color
 * */
const IconPicker = ({ defaultIcon, defaultColor, onIconChange, ...rest }: Props) => {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(defaultIcon ?? null);
  const [bgColor, setBgColor] = React.useState(colors.find(col => col.color === defaultColor) ?? colors[0]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredIcons = icons.filter(icon => icon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const renderIcon = (IconComponent: React.ComponentType<any>) => {
    return <IconComponent weight="fill" color={'#ffffff'} />;
  };

  return (
    <Select.Root
      onValueChange={val => {
        setSelectedIcon(val);
        onIconChange?.(val, bgColor.color);
      }}>
      <Select.Trigger asChild>
        <Button
          {...rest}
          role="combobox"
          aria-label="Open icon picker"
          variant="outline"
          className="transition-colors duration-300 size-7 p-0"
          style={{
            background: `linear-gradient(135deg, ${bgColor.color}, #000)`,
            borderColor: `${bgColor.color}`,
          }}>
          {selectedIcon
            ? renderIcon(icons.find(i => i.name === selectedIcon)?.component ?? icons[0].component)
            : renderIcon(ImageSquare)}
        </Button>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="z-50 rounded border p-2 transition-colors duration-300"
          style={{
            borderColor: bgColor.color,
            backgroundColor: bgColor.accentColor,
          }}>
          <div className="space-y-2">
            <div className="flex gap-1 p-1">
              {colors.map(color => (
                <motion.button
                  key={color.color}
                  whileTap={{ scale: 0.95 }}
                  className="hover:opacity-80 size-5 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: color.color,
                    border: color === bgColor ? '2px solid white' : 'none',
                  }}
                  onClick={() => {
                    setBgColor(color);
                    onIconChange?.(selectedIcon ?? icons[0].name, color.color);
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search icons..."
                className="pl-8 bg-zinc-900 border-zinc-800 text-white"
                style={{ background: bgColor.accentColor }}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <Select.Viewport className="grid grid-cols-8 overflow-y-auto">
              {filteredIcons.map(icon => (
                <Select.Item className="cursor-pointer" key={icon.name} value={icon.name}>
                  <Select.ItemText>
                    <div
                      className={cn([
                        'border-2 rounded flex items-center justify-center size-7 p-0',
                        `hover:!opactiy-50`,
                      ])}
                      style={{
                        color: selectedIcon === icon.name ? '#ffffff' : '#A1A1AA',
                        background:
                          selectedIcon === icon.name
                            ? `linear-gradient(135deg, ${bgColor.color}, #000)`
                            : 'transparent',
                        borderColor: selectedIcon === icon.name ? bgColor.color : 'transparent',
                      }}>
                      {renderIcon(icon.component)}
                    </div>
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </div>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default IconPicker;
